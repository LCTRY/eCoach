const mongoose = require('mongoose')
const postSchema = mongoose.Schema ({
    title: {
        type: String,
        require: [true, 'add title']
    },
    body: {
        type: String,
        require: [true, 'add body']
    },
    comments: [
        { 
        commentBy: String,
        body: String, 
        date: Date }
    ],
    author: {
        type: String,
        require: [true, 'add author']
    },
    teamID: {
        type: String,
        require: [true, 'add teamID']
    }
},
    {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)