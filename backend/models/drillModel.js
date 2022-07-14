const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
    drillName: {
        type: String
    },
    createdBy: {
        type: String,
        required: [true, "enter created by"]
    },
    team: {
        type: String
    },
    description: {
        type: String
    },
    image:{

    }

})

module.exports = mongoose.model('Practice', eventSchema)

