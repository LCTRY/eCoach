const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
    date: {
        type: Date,
        required: [true, "enter practice date"]
    },
    createdBy: {
        type: String,
        required: [true, "enter created by"]
    },
    team: {
        type: String
    },
    drills: [
            { 
                id: String, name: String 
            },
    ]

})

module.exports = mongoose.model('Practice', eventSchema)

