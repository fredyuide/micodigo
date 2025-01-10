var express = require('express');
var router = express.Router();

const teacherController = require("../controllers/teacher.controller")

/* POST METHOD CREATE USER. */
router.get('/list', function(require, response) {
    const result = teacherController.getList();
    console.log(result);

    response.status(200).json({
        data: result,
        status: true,
        message: "Teachers message",
    })
});

router.post("/create", function(request, response) {
    console.log(request.body);
    const result = teacherController.postCreate(request.body);

    response.status(200).json({
        status: true,
        info: result,
    });
});

router.post("/update", function(request, response) {
    console.log(request.body);
    const result = teacherController.postUpdate(request.body);

    response.status(200).json({
        status: true,
        info: result,
    });
});

router.post("/delete", function(request, response) {
    console.log(request.body);
    const result = teacherController.postDelete(request.body);

    response.status(200).json({
        status: true,
        info: result,
    });
});

module.exports = router;
