var express = require('express');
var managerRoutes = express.Router();

/* GET home page. */
managerRoutes.get('/', function(req, res) {
    res.json({
        "message" : "hello"
     })
});

module.exports = managerRoutes;
