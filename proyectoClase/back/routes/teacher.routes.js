var express = require('express');
var router = express.Router();

const teacherController = require("../controllers/teacher.controller")

/* POST METHOD CREATE USER. */
router.get('/list', function(require, response) {

    const result = teacherController.getList();

    response.status(200).json({
        data: result,
        status: true,
        message: "Teachers message",
    })
});

module.exports = router;
