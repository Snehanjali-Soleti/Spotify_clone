const express = require('express');
const passport = require('passport');
const router = express.Router();
const Playlist = require('../models/Playlist');
const User = require('../models/User');
const Song = require('../models/Song');

router
//create playlist
.post('/create', passport.authenticate("jwt", {session:false}), async (req,res) => { 
    const currentUser = req.user;
    const {name, thumbnail, songs} = req.body;
    if(!name || !thumbnail || !songs) {
        return res
            .status(403)
            .json({error:"Insufficient details to create playlist."});
    }
    const playlistData = {
        name, 
        thumbnail, 
        songs, 
        owner: currentUser._id, 
        collaborators: []
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist); 
})

.get('/get/me', passport.authenticate("jwt", {session:false}), async (req,res) => {
    const artistId = req.user._id;

    const playlists = await Playlist.find({ owner: artistId }).populate('owner');
    return res.status(200).json({data: playlists});
}
)

// getting a playlist through playlistId - to get particular playlist
// dynamic routes
.get('/get/playlist/:playlistId', passport.authenticate("jwt", {session:false}), async (req,res) => { 
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({_id: playlistId}).populate({
        path:"songs",
        populate :{
            path: "artist"
        }
        });
    if(!playlist){
        return res.status(304 ).json({error:"artist does not exist"});
    }
    return res.status(200).json(playlist);
})


// getting all the playlist created by the artist
.get('/get/artist/:artistId', passport.authenticate("jwt", {session:false}), async (req,res) => {
    const artistId = req.params.artistId;
    // if artist doesnot exist
    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res.status(301).json({error:"Invalid"});
    }
    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json(playlists);
}
)
// add song to playlist
.post('/add/song',passport.authenticate("jwt", {session:false}), async (req,res) => {
    const currentUser = req.user;
    const {playlistId, songId } = req.body;
    //console.log(playlistId);
    const playlist = await Playlist.findOne({_id: playlistId});
    //console.log(playlist);
    if(!playlist){
        return res.status(404 ).json({error:"playlist does not exist"}); 
    }
    // 1. checking curruser owns playlist
    // playlist.owner != currentUser._id => both are object hence cant be compared
    if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({error: "not allowed"});
    }
    // 2. check if song is valid or not
    const song = await Song.findOne({_id: songId});
    if( !song){
        return res.status(404 ).json({error:"song does not exist"});
    }
    // 3. adding to playist
    if (!playlist.songs.includes(songId)) {
        playlist.songs.push(songId);
        await playlist.save(); // keeping changes in db save
    }

    return res.status(200).json(playlist);
});

module.exports = router;