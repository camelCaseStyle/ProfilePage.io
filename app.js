var express = require("express"),
    app = express()
    mongoose = require("mongoose"),
    ejsLint = require("ejs-lint");


var indexRoutes = require("./routes/index");
var DATABASEURL = process.env.DATABASEURL;
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
mongoose.connect(DATABASEURL, { useNewUrlParser: true });
var PORT = process.env.PORT ,
    IP = process.env.IP;


app.listen(PORT, IP, function(){
    console.log("The server is up!")
});



app.use(indexRoutes); 