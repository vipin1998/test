var express = require('express');
var signupRoutes = express.Router();

var User = require('./models/user');
var Leave = require('./models/leave');
var Verify = require('./verify');

/* GET home page. */
signupRoutes.get('/', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = signupRoutes;
