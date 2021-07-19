const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    // Personal data
    name : {
        type : String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // Experiance
    experiance: {
        type: String,
        required: true
    },
    // Refferance
    Refferances: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    
})
module.exports = mongoose.model(Schema, 'Become a driver')