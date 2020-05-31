let express = require("express"),
    router = express.Router({mergeParams:true}),
    Story = require("../models/story");
let request = require('request');

const Constants = require('./Constants');
router.get("/", function(req, res){
    Story.find({}, function(error, stories){
        if(error){ 
            console.log("Error !" + error);
        }else{
            res.render("home/index",{stories: stories});
        }
    });    
});

router.get("/about", function(req, res){
    res.render("home/about");
});

router.get("/chatanalyser", (req, res)=>{
    res.render("home/chat");
})

router.get("/rupali", (req, res)=>{
   
    let options = {
        url: 'https://icanhazdadjoke.com/search?term=&page='+Math.floor(Math.random()*20),
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
        }
    }
    request(options, (req, response, body)=>{
        res.render('home/rupali', {jokes: JSON.parse(body).results});
    })

})

router.get('/radio', (req, res)=>{
    res.render('home/radio');
})

module.exports = router;