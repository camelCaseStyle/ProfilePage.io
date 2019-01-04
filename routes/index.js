var express = require("express"),
    router = express.Router({mergeParams:true});

router.get("/", function(req, res){
    res.render("home/index");
});

module.exports = router;