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
    role : role of user in company(Employee or Manager)
    password : password of user

    ## Returns ##
    Add a user in database
*/
signupRoutes.post('/user',Verify.checkAdmin, function(req, res , next)
 {
     /*
        ####  params  ####
        email : email in form of string

        ####  returns  ####
        true if email format is correct otherwise not
     */
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
        User.find({'email' : req.body.email} , function(err , old_user)
        {
            if(old_user.length != 0)
            {
                res.end('email id already registered');
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
});

module.exports = signupRoutes;
