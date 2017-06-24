var express = require('express');
var employeeRoutes = express.Router();

/* GET home page. */
employeeRoutes.get('/', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = employeeRoutes;
