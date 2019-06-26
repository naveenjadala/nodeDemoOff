const Joi = require('@hapi/joi');
const User = require('../model/UserModel');

const ValidateUser = {

    validate: () => { 
    const Schema = Joi.object().keys({
        name: Joi.string().min(5).max(50).required(),
        phoneNumber: Joi.string().max(10).required()
    })
    const val = Joi.validate(User, Schema);
    console.log(val.error);
    return Joi.validate(User, Schema);
}
    // return Joi.
}

module.exports = ValidateUser;