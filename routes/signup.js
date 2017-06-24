var express = require('express');
var signupRoutes = express.Router();

/* GET home page. */
signupRoutes.get('/', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = signupRoutes;
