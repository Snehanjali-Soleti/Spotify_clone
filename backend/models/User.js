const mongoose= require('mongoose');

//creating a model
//   require mongoose
//    connect schema
//    create a model


const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        private: true
    },
    likedsongs:{
        type:String,
        default:"" //if not given any value - keep it as empty
    },
    playlist:{
        type:String,
        default:""
    },
    subscribedArtist:{
        type:String,
        default:""
    },
})

const Usermodel = mongoose.model("User",userSchema);

module.exports = Usermodel; 

