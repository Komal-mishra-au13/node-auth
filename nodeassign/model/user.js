const mongoose = require('mongoose');

const user= mongoose.Schema({
    firstame: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    phno: {
        type: String,
        required: true
    },
   
},{timestamps: true});

module.exports = mongoose.model('user', user);