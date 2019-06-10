const userModel = require('../model/UserModel');

const userController = {

    getUsersList: async(req, res) => {

        const user = await userModel.find();

        const userdetails = new userModel(user);
        // console.log(userdetails);
        res.status(200).json(user);
    }
}

module.exports = userController;