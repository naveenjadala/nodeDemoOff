const {UserModel, validate} = require('../model/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authContoller = {
    
    signUp: async(req, res) => {

        //check the user before saving do the user exist otr not.
        const userExist = await UserModel.findOne({ phoneNumber: req.body.phoneNumber});
        if(userExist) { return res.status(403).json({ message: "user already in use"}); }

        const user = new UserModel(req.body);

        //hashing password.
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        //create a token for user and save it.
        user.token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        // saving the new user into the db.
        await user.save();

        //returning the responce
        res.status(200).json({ user });
    },

    login: async(req, res) => {

        //check the user phoneNumber and password
        const userExist = await UserModel.findOne({ phoneNumber:req.body.phoneNumber })
        if(!userExist) { return res.status(403).json("incorrect phoneNumber") }

        //validate password
        const validatePassword = await bcrypt.compare(req.body.password, userExist.password);
        if(!validatePassword) { return res.status(401).json("invalid phoneNumber or password")}

        res.status(200).json(userExist);
    }
}

module.exports = authContoller;