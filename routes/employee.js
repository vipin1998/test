var express = require('express');
var employeeRoutes = express.Router();

var User = require('./models/user');
var Leave = require('./models/leave');

/* GET home page. */
employeeRoutes.get('/leave_applications', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

employeeRoutes.post('/new_application', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = employeeRoutes;
