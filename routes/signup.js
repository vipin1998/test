var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var signupRoutes = express.Router();
signupRoutes.use(bodyParser.json());

var User = require('./models/user');
var Leave = require('./models/leave');
var Verify = require('./verify');

/*
    ##  Body of Request  ##
    firstName : users first name
    lastName : users last name
    email : users email id (should be unique for each user)
    role : role of user in company(employee or manager)
    username : username of user (should be unique)

    ## Returns ##
    Add a user in database
*/
signupRoutes.post('/employee',Verify.checkAdmin, function(req, res , next)
 {
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    if(!validateEmail(req.body.email))
    {
        res.end('Invalid Email');
    }
    else
    {
        User.find({'email' : req.body.email} , function(err , email_user)
        {
            if(email_user.length != 0)
            {
                res.end('email id already registered');
            }
            else
            {
                User.find({'username' : req.body.username} , function (err,username_user)
                {
                    if(username_user.length != 0)
                    {
                        res.end('username already registered');
                    }
                    else
                    {
                        User.create(req.body , function(err , new_user)
                        {
                            if (err)
                            {
                                res.end('Role not available');
                            };
                            res.writeHead(200, {
                                'Content-Type': 'text/plain'
                            });
                            res.end('Added the user with role ' + req.body.role);
                        })
                    }
                })
            }
        })
    }
});

module.exports = signupRoutes;
