const mongoose= require('mongoose');

//creating a model
//   require mongoose
//    connect schema
//    create a model


const playlistSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    thumbnail: {
        type:String,
        required:true
    },
    owner: {
        type: mongoose.Types.ObjectId, // here every obj creates an id- that id can be refered through is way
        ref: "User"
    },
    //in playlist we have array of songs
    songs:[
        {
        type: mongoose.Types.ObjectId,
        ref: "Song"
        },
    ],

    collaborators: [
        {
        type: mongoose.Types.ObjectId,
        ref: "User"
        },
    ],

})

const Playlistmodel = mongoose.model("Playlist",playlistSchema);

module.exports = Playlistmodel; 