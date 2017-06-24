var http = require("http");
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var routes = require('./routes/index');

var port = process.env.PORT||8080;

var app = express();

app.use(logger('dev'));

app.use('/', routes);

app.listen(port,function(err){
    if(err)
    {
        throw err;
    }
    console.log('app is running at ' + port);
})

mongoose.connect('mongodb://localhost/vipin')
