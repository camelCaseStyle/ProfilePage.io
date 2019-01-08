var express = require("express"),
    app = express()
    mongoose = require("mongoose");


var indexRoutes = require("./routes/index");
var DATABASEURL = "mongodb://anubhav.ashish:jamBread22@ds149744.mlab.com:49744/profilepage";
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
mongoose.connect(DATABASEURL, { useNewUrlParser: true });
var PORT = process.env.PORT || 3000,
    IP = process.env.IP || "127.0.0.1";


app.listen(PORT, IP, function(){
    console.log("The server is up!")
});



app.use(indexRoutes); 