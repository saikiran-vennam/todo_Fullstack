const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    activity : {
        type :String, 
        required : true
    },
    status : {
        type: String, 
        required : true,
        default : "Pending"
    },
    time: {
        type: String, 
        required: true,
        default: "00:00"
    },
    user : {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;