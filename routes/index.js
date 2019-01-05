var express = require("express"),
    router = express.Router({mergeParams:true}),
    Story = require("../models/story.js");

router.get("/", function(req, res){
    Story.find({}, function(error, stories){
        if(error){ 
            console.log("Error !" + error);
        }else{
            res.render("home/index",{stories: stories});
        }
    });   
});

module.exports = router;