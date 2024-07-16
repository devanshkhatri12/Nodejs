const mongoose = require('mongoose');


// define schema
const studentData = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    class: {
        type: String,
        enum: ['11th', '12th']
    }
})


// creating model
const student = mongoose.model('Student',studentData)
module.exports = student;