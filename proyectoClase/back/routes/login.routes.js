var express = require('express');
var router = express.Router();

const loginController = require("../controllers/login.controller")

/* GET home page. */
router.post('/login', function(request, response) {
    const result = loginController.getLogin(
        request.body.username,
        request.body.password
    );

    console.log(request.body);

    response.status(200).json({
        status: !result ? false : true,
        message: "Okey esta el Login",
        info: !result ? "Credenciales incorrectas" : "Coredenciales correctas",
    });
});

module.exports = router;
