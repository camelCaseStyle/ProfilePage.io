var mongoose = require("mongoose");

var StorySchema = mongoose.Schema({
    imageURL : String,
    title : String,
    briefDesc: String,
    fullDesc: String,
});

module.exports = mongoose.model("Story", StorySchema);