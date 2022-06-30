const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'please add first name']
    },
    last_name: {
        type: String,
        required: [true, 'please add last name']
    },
    password: {
        type: String,
        required: [true, 'please add password']
    },
    email: {
        type: String,
        required: [true, 'please add email']
    },
    userType: {
        type: String,
        required: [true, 'please add user type']
    }
})

module.exports = mongoose.model('User',userSchema)