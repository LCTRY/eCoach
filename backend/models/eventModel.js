const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required:[true, "enter event name"]
    },
    startDate: {
        type: Date,
        required: [true, "enter event start date"]
    },
    endDate: {
        type: Date,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String
    },
    location: {
        type: String
    },
    description:{
        type: String
    },
    eventType: {
        type: String
    },
    isRepeat: {
        type: String,
        dates: []
    }
})

module.exports = mongoose.model('Event', eventSchema)

