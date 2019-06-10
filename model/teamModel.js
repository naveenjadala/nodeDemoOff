const mongoose = require('mongoose');

const team = new mongoose.Schema({

    teamCreatedDate: {
        type: Date,
        default: Date.now
    },

    playerList: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],

    teamName: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('team', team);