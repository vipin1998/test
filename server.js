var http = require("http");
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var manager = require('./routes/manager');
var employee = require('./routes/employee');
var signup = require('./routes/signup');

var port = process.env.PORT||8080;

var app = express();

app.use(logger('dev'));

app.use('/manager', manager);
app.use('/employee', employee);
app.use('/signup', signup);

app.listen(port,function(err){
    if(err)
    {
        throw err;
    }
    console.log('app is running at ' + port);
})

mongoose.connect('mongodb://localhost/vipin')
