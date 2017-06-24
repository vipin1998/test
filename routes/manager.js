var express = require('express');
var managerRoutes = express.Router();
var User = require('./models/user');
var Leave = require('./models/leave');

/* GET home page. */
managerRoutes.get('/', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = managerRoutes;
