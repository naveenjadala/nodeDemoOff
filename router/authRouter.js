const express = require('express');
const Router = express.Router();
const AuthRouter = require('../controller/authConroller');


Router.post("/signUp", AuthRouter.signUp);
Router.post("/login", AuthRouter.login);

module.exports = Router;
