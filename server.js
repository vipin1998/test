var http = require("http");
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');

var manager = require('./routes/manager');
var employee = require('./routes/employee');
var signup = require('./routes/signup');

var port = process.env.PORT||8080;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/vipin')

process.on('uncaughtException',function(err){
    console.log('Caught Exception :'+err);
})