const teamController = require('../controller/teamController');
const express = require('express');
const Router = express.Router();

Router.post('/createTeam', teamController.createTeam);
Router.post('/createGame', teamController.createGame);

module.exports = Router;