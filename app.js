var express = require("express"),
    app = express();


var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

var PORT = process.env.PORT || 3000,
    IP = process.env.IP || "127.0.0.1";


app.listen(PORT, IP, function(){
    console.log("The server is up!")
});

app.use(indexRoutes); 