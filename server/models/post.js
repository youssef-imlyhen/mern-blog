import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    descreption: String,
    content: String,
    author: String,
    thumbnail: String,
    tags: [String],
    selectedFile: String,
    background: String,
    createdAt: {
        type: Date,
        default: new Date,
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;