const jwt = require('jsonwebtoken');

const getToken = (email, user) =>{
    const token = jwt.sign({identifier: user._id},'secretkey');
    return token;
};

module.exports = {getToken};