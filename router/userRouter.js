    const userController = require('../controller/userController');
    const express = require('express');
    const Router = express.Router();
    const validater = require('../helper/validationHelper')

Router.get("/getallusers", userController.getUsersList);
Router.post("/addUser", userController.addUser);

module.exports = Router;