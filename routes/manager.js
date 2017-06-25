var express = require('express');
var managerRoutes = express.Router();
var User = require('./models/user');
var Leave = require('./models/leave');

var Verify = require('./verify');

/* GET home page. */
managerRoutes.put('/approve_application', Verify.checkManager, function(req, res) {
    Leave.find({ '_id' : req.body.id} , function (err , leave)
    {
        leave[0].approvalStatus = "approved"
        leave[0].save(function(err)
        {
            if(err)
            {
                throw err;
            }
            res.end('successfuly approved');
        });
    });
});

managerRoutes.get('/get_all_applications', Verify.checkManager, function(req, res) {
    Leave.find({} , function (err , leaves)
    {
        res.json(leaves);
    })
});

module.exports = managerRoutes;
