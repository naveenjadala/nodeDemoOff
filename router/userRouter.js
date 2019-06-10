    const userController = require('../controller/userController');
    const express = require('express');
    const Router = express.Router();

Router.get("/getallusers", userController.getUsersList);

module.exports = Router;