// in this file, all auth related routes like signup, signin

const express= require('express');
const router= express.Router(); // here again iam not using express()-  dont want all stuff (only it required to create routes())
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {getToken} = require('../utils/helpers');



router.post('/register', async (req,res)=>{
    //step 1:
    const {email, password, firstname, lastname, username} = req.body;
    // step 2:
    // does user with this email exist
    const user = await User.findOne({email: email});
    if(user){
        // if i  use res.json("") -> default it takes status code (200) -> it is a scucces -> whatever  asks it sends that
        return res
            .status(403)
            .json({error:"user with email exists"});
    }
    // step 3:
    // valid req
    // creating new user in db
    //  shouldnt store password directly -  gone na hash it
        // Generate a salt
    const salt = bcrypt.genSaltSync(10);
        // Hash a password
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUserData = {email, 
                        password: hashedPassword, 
                        firstname,
                        lastname, 
                        username};
    const newUser = await User.create(newUserData);

    // step 4: 
    // generating token to return to user
    const token = getToken(email, newUser); 

    //step 5:
    //return the result to user
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password; // we should show to user (hashedpassword)

    return res.status(200).json(userToReturn); // this displays on webpage
});

router.post("/login", async (req, res) => {
    // step 1: take input
    const {email, password} = req.body;
    // step 2: verify whether email exists in db 
    const user = await User.findOne({email: email});
    // step 3: verify password
    if(!user){
        return res.status(403).json({error:"invalid credentials"});
    }
    // const loginPassword = bcrypt.hashSync(password, salt);
    // if(loginPassword!==user.password){
    //     return res.status(403).json({error:"enter valid password"});
    // }
    const isvalidPassword = bcrypt.compareSync(password, user.password);
    if(!isvalidPassword){
        return res.status(403).json({error:"invalid credentials"});
    }
    // step 4: generate token
    const token = getToken(email, user);
    //step 5:
    //return the result to user
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password; // we should not show to user (hashedpassword)

    return res.status(200).json(userToReturn); // this displays on webpage

})

module.exports = router;