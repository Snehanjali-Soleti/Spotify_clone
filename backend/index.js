// npm init -y -> to create backend environment
// npm i express => installing express

const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/songs');
const playlistRoutes = require('./routes/playlist');
const cors = require('cors');
const path = require("path");

 
const app=express();
const port =  process.env.PORT || 7000;

const _dirname = path.resolve(); 

app.use(cors());
app.use(express.json()); // data comes in json format

//connecting to mongodb
// 2 arg - (url of our database),({other requirements wrt to database})
//(returns promise)
// password shouldn't write directly bcz of security issues
// all data stored in process.env - from their iam fetching password
// console.log(process.env)
mongoose.connect("mongodb+srv://soletisnehanjali:"+process.env.MONGO_PASSWORD+"@cluster0.iyidpbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("monogo connected");
    })
    .catch((err)=>{
        console.log("error while connecting",err)
    });



let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secretkey';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier}, function(err, user) {
        //(error,whether user exists or not)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));



// app.get('/',(req,res)=>{
//     res.send("hi");
// })

app.use("/auth", authRoutes); // it is a middleare
app.use('/song',songRoutes);
app.use('/playlist',playlistRoutes);

app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get('*',(_, res)=> {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
})

app.listen(port,()=>{console.log("app running at port no:"+port+ "\n"+ "http://localhost:"+port+"/home")});

