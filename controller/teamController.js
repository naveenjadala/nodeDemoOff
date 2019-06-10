const teamModel = require('../model/teamModel');
const gameModel = require('../model/gameModel');

const team = {

    createTeam: async(req, res) => {
        
        const create = new teamModel(req.body);

        await create.save();

        res.status(200).json(create);
    },

    createGame: async(req, res) => {
        const create = new gameModel(req.body);
        
        await create.save();
        res.status(200).json(create);
    }
}

module.exports = team;