const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
    name: {
        type: String
    },
    createdBy: {
        type: String,
        required: [true, "enter created by"]
    },
    team: {
        type: String
    }

})

module.exports = mongoose.model('Practice', eventSchema)

