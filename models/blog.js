var mongoose = require("mongoose");
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    createdAt:{type:Date, default:Date.now},
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
module.exports = mongoose.model("Blog", blogSchema);