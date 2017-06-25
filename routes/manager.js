var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var managerRoutes = express.Router();
managerRoutes.use(bodyParser.json());

var User = require('./models/user');
var Leave = require('./models/leave');
var Verify = require('./verify');

/*
    ####  params  ####
    id : _id of application in database

    ####  returns  ####
    approve the status of application if already approved otherwise report error
*/
managerRoutes.put('/approve_application', Verify.checkManager, function(req, res) {
    Leave.find({ '_id' : req.body.id} , function (err , leave)
    {
        if(leave[0].approvalStatus == 'approved')
        {
            res.end("application is already approved");
        }
        else
        {
            leave[0].approvalStatus = "approved";
            leave[0].approvedAt = new Date();
            leave[0].save(function(err)
            {
                if(err)
                {
                    throw err;
                }
                res.end('successfuly approved');
            });
        }
    });
});


/*
    ####  returns  ####
    returns the list of all leave applications to manager
*/
managerRoutes.get('/get_all_applications', Verify.checkManager, function(req, res) {
    Leave.find({} , function (err , leaves)
    {
        res.json(leaves);
    })
});

module.exports = managerRoutes;
