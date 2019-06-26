const mongoose = require('mongoose');

const gameModel = new mongoose.Schema({

    gameName: {
        type:String,
        required: true
    },

    listOfTeams: [{
        type: mongoose.Schema.ObjectId,
        ref: 'team'
    }],

    gameDate: {
        type: Date,
        default: Date.now
    },

    matchsList:[{
        type: mongoose.Schema.ObjectId,
        ref: 'match'
    }]
})
module.exports = mongoose.model('createGame', gameModel);