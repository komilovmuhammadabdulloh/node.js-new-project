const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   
    email : {
        type : String,
        required: true
    },
})
module.exports = mongoose.model(Schema, 'Admin')