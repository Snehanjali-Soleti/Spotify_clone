const express = require('express');
const passport = require('passport');
const router = express.Router();
const Song = require('../models/Song');
const User = require('../models/User');

router
// creating a single song
.post("/create", passport.authenticate("jwt", {session:false}), async (req,res) => {
    const {name, thumbnail, track} = req.body;
    if(!name || !thumbnail || !track) {
        return res
            .status(403)
            .json({error:"Insufficient dtails to create song."});
    }
    const artist = req.user._id;
    const songDetails = {name, thumbnail, track, artist};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
})
// songs w.r.t current user
.get('/get/mysongs', passport.authenticate("jwt", {session:false}), async (req,res) => {
    // through user we fetch all songs related to him through id
    const songs = await Song.find({artist: req.user._id}).populate("artist");
    if(!songs){
        return res.status(301).json({error:"songs does not exist"});
    }
    return res.status(200).json({data: songs});
})
//songs w.r.t artist
.get("/get/artist/:artistId", passport.authenticate("jwt", {session: false}), async (req,res) => {
    const {artistId} =req.params;
    // verifying artist present or not
    const artist = await User.findOne({_id: artistId});
    // !null = true
    // ![] = true
    if(!artist){
        return res.status(301).json({error:"artist does not exist"});
    }

    const songs =  await Song.find({artist: artistId});
    if(!songs){
        return res.status(301).json({error:"songs does not exist"});
    }
    return res.status(200).json({data: songs});
})
// songs w.r.t single song
.get("/get/songname/:songName", passport.authenticate("jwt", {session: false}), async (req,res) => {
    const {songName} =req.params;
    // here no need to verify whether it exist or not -  if not present it gives no result
    // on a single name we get multiple songs
    const songs =  await Song.find({name: songName}).populate('artist');
    return res.status(200).json({data: songs});
})


module.exports = router;