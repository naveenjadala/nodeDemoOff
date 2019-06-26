const userModel = require('../model/UserModel');


const userController = {

    getUsersList: async(req, res) => {

        const user = await userModel.find();

        const userdetails = new userModel(user);
        // console.log(userdetails);
        res.status(200).json(user);
    },

    addUser: async(req, res) => {

        // const { error } = await validateUser(req.body);
        // if(error) return res.status(400).send(error.details[0].message);

        const user = new userModel(req.body);

        await user.save();
        
        res.status(200).json(user);
    }
}

module.exports = userController;