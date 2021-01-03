var express = require("express"),
    app = express()
    mongoose = require("mongoose");


var indexRoutes = require("./routes/index");
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

var PORT = process.env.PORT ,
    IP = process.env.IP ;


app.listen(PORT, IP, function(){
    console.log("The server is up!")
});



app.use(indexRoutes); 