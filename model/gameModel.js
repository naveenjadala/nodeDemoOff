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
    }
})
module.exports = mongoose.model('createGame', gameModel);