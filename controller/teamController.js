const teamModel = require('../model/teamModel');
const gameModel = require('../model/gameModel');
const matchModel = require('../model/matchModel');

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
    },

    getGamesList: async(req, res) => {

        gameModel.find()
        .populate('listOfTeams'," _id teamName playerList")
        .populate('matchsList', " _id selectGame firstTeamName secondTeamName matchDate wonBy")
        .exec((err, result) => {
            if(err) {
                return res.status(400).json({
                    error : err
                })
            }
            res.json( result );
        })

        // res.status(200).json(gamesList);
    },

    createMatch: async(req, res) => {
        const match = new matchModel(req.body);

        const game = await gameModel.findOne({_id: match.selectGame});

        await match.save();
        game.matchsList = match._id;
        await game.save();
        res.status(200).json(match);
    }
}

module.exports = team;