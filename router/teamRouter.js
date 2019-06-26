const teamController = require('../controller/teamController');
const express = require('express');
const Router = express.Router();

Router.post('/createTeam', teamController.createTeam);
Router.post('/createGame', teamController.createGame);
Router.post('/creatMatch', teamController.createMatch);
Router.get('/getGamesLlist', teamController.getGamesList);

module.exports = Router;