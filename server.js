"use strict";

var xsjs  = require("sap-xsjs");
var xsenv = require("sap-xsenv");
var port  = process.env.PORT || 3000;
var server = require('http').createServer();

var options = xsjs.extend({
	//anonymous : true, // remove to authenticate calls
	redirectUrl : "/index.xsjs"
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

// var port = 3000;
var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder (TODO: Client folder for Angular staff)
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});