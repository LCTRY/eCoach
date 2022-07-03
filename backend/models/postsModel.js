const mongoose = require('mongoose')
const postSchema = mongoose.Schema ({
    title: {
        type: String,
        require: [true, 'please add title']
    },
    body: {
        type: String,
        require: [true, 'please add body']
    },
    comments: [
        { 
        commentBy: String,
        body: String, 
        date: Date }
    ],
    author: {
        type: String,
        require: [true, 'please add author']
    }
},
    {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)