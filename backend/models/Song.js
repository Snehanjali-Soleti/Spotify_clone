const mongoose= require('mongoose');

//creating a model
//   require mongoose
//    connect schema
//    create a model


const songSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    thumbnail: {
        type:String,
        required:true
    },
    track: {
        type:String,
        required:true
    },
    artist: {
        type: mongoose.Types.ObjectId, // here every obj creates an id- that id can be refered through is way
        ref: "User"
    }

})

const Songmodel = mongoose.model("Song",songSchema);

module.exports = Songmodel; 