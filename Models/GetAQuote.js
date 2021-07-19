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
    companyName: {
        type: String,
        required: true
    },
    MC : {
        type: String,
        required: true
    },
    role: {
        type: String, 
        enum:['Dry van','Reefer', 'Step-deck', 'Flat bed'],
         default:"Dry van"
    },
    // Notes
    notes: {
        type: String,
        required: true
    },
    NeedAsistent: {
        type: Boolean,
        default: false
    },
    //Personal Data
    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    PickUpDate: {
        type: String,
        required: true
    },
    DeliveryDate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})
module.exports = mongoose.model(Schema, 'Get a quote')