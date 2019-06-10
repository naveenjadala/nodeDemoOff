const studenDetailsModel = require("../model/studentDetailsModel");

const studentController = {

    addStudent: async(req, res) => {
        
        const student = new studenDetailsModel(req.body);

        student.save()
        // .exec((err, result) => {
        //     if(err) {
        //         return res.status(400).json({
        //             error: err
        //         })
        //     }
        //     res.json(result);
        // });
        .then(result => {
            res.status(200).json({
                result
            });
        });
    }
}

module.exports = studentController;