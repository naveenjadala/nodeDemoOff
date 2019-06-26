const mongoose = require('mongoose');

const match = mongoose.Schema({
    selectGame: {
        type: mongoose.Schema.ObjectId,
        require: true
    },

    firstTeamName: {
        type: mongoose.Schema.ObjectId,
        require: true
    },

    secondTeamName: {
        type: mongoose.Schema.ObjectId,
        require: true
    },

    matchDate: {
        type: Date,
        default: Date.now()
    },

    wonBy: {
        type: String,
    }
})

module.exports = mongoose.model('match', match);