const express = require("express");

const router = express.Router();
const studentController = require('../controller/studentDetails.contoller');


router.post("/addstudent", studentController.addStudent);

module.exports = router;