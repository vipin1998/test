var express = require('express');
var managerRoutes = express.Router();
var User = require('./models/user');
var Leave = require('./models/leave');

/* GET home page. */
managerRoutes.put('/check_application', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

managerRoutes.get('/get_all_applications', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = managerRoutes;
