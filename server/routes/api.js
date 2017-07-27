const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://parvez:parvez@ds123193.mlab.com:23193/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error: " + err);
    }
});

router.get('/videos', function(req, res){
    console.log("Get All videos");
    Video.find({})
    .exec(function(err, videos){
        if(err){
            console.log("Error Retriving videos");
        }else{
            res.json(videos);
        }

    })
});

router.get('/videos/:id', function(req, res){
    console.log("Get single video");
    Video.findById(req.params.id)
    .exec(function(err, video){
        if(err){
            console.log("Error Retriving videos");
        }else{
            res.json(video);
        }

    })

});

router.post('/videos', function(req, res){
    console.log("Post A video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error Saving the video");
        }else{
            res.json(insertedVideo);
        }
    });
});

router.put('/videos/:id', function(req, res){
    console.log("Update A video");
    Video.findByIdAndUpdate(req.params.id,{
        $set:{title: req.body.title, url: req.body.url, description:req.body.description}
    },{
        new :true //if true it will sent the new video value and false it will sent the old video value
    }, function(err, updatedVideo){
        if(err)
            res.send("Error Updating video");
        else
            res.json(updatedVideo);
    });
});

router.delete('/videos/:id', function(req, res){
    console.log("Delete A video");
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err)
            res.send("Error deleting video");
        else
            res.json(deletedVideo);
    });
});

module.exports = router;
