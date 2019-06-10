const mongoose = require('mongoose');

const studentModel = new mongoose.Schema({

    studentName: {
        type: String
    },

    studentAge: {
        type: Number
    },

    studentClass: {
        type: Number
    }

});

module.exports = mongoose.model("studentDetails", studentModel);