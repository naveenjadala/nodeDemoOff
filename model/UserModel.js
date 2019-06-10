const mongoose = require('mongoose');

const userModel  = mongoose.Schema( {

    phoneNumber: {
        type: Number,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    created: {
        type: Date,
        default: Date.now
    }, 

    updateCreated: {
        type: Date
    },

    token: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("User", userModel);