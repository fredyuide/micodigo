var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
//   response.render('index', { title: 'Express Cripto Test' });
    response.status(200).json({
        status: true,
        message: "Okey",
    })
});

module.exports = router;
