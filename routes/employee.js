var express = require('express');
var employeeRoutes = express.Router();

var User = require('./models/user');
var Leave = require('./models/leave');

/* GET home page. */
employeeRoutes.get('/', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = employeeRoutes;
