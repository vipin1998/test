var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var employeeRoutes = express.Router();
employeeRoutes.use(bodyParser.json());

var User = require('./models/user');
var Leave = require('./models/leave');


employeeRoutes.get('/leave_applications/:email/:password', function(req, res) 
{
    var email = req.params.email;
    var password = req.params.password;
    User.find({'email' : email , 'password' : password } , function (err , user )
    {
        if(user.length == 0)
        {
            res.end('Invalid email and password');
        }
        else
        {
            console.log(user[0]._id);
            Leave.find({requestedBy : user[0]._id},function (err,leave)
            {
                res.json(leave);
            });
        }
    })
});

employeeRoutes.post('/new_application', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    User.find({'email' : email , 'password' : password } , function (err , user )
    {
        if(user.length == 0)
        {
            res.end('Invalid email and password');
        }
        else
        {
            Leave.create(req.body , function (err , leave)
            {
                if(err)
                {
                    res.end('leave type not correct');
                }
                else
                {
                    leave.requestedBy = user[0];
                    leave.requestedAt = new Date()
                    leave.save();
                    res.end('Leave application submitted :)');
                }
            });
        }
    });
});

module.exports = employeeRoutes;
