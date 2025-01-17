var express = require('express');
var router = express.Router();

const autosController = require("../controllers/autos.controller")

/* POST METHOD CREATE USER. */
router.post('/list', function(request, response) {
    const result = autosController.getList();
    console.log(result);

    response.status(200).json({
        data: result,
        status: true,
        message: "Lista de Autos message",
    })
});

router.post("/create", function(request, response) {
    console.log(request.body);
    const result = autosController.postCreate(request.body);

    response.status(200).json({
        status: true,
        info: result,
        message: "Auto Creado message",
    });
});

router.post("/update", function(request, response) {
    console.log(request.body);
    const result = autosController.postUpdate(request.body);

    response.status(200).json({
        status: true,
        info: result,
        message: "Auto Actualizado message",
    });
});

router.post("/delete", function(request, response) {
    console.log(request.body);
    const result = autosController.postDelete(request.body);

    response.status(200).json({
        status: true,
        info: result,
        message: "Auto Eliminado message",
    });
});

module.exports = router;