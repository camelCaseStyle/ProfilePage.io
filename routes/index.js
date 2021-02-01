let express = require("express"),
    router = express.Router({mergeParams:true}),
    Story = require("../models/story");
let request = require('request');

const Constants = require('./Constants');
router.get("/", function(req, res){
    res.render("home/about");    
});

router.get("/about", function(req, res){
    res.render("home/about");
});

router.get("/chatanalyser", (req, res)=>{
    res.render("home/chat");
})

router.get('/upasna', (req, res)=>{
    res.render('upasna/about');
})



module.exports = router;