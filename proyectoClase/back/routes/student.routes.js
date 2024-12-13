var express = require('express');
var router = express.Router();

/* POST METHOD CREATE USER. */
router.post('/create', function(request, response) {
    response.status(200).json({
        status: true,
        message: "Students message",
    })
});

module.exports = router;
