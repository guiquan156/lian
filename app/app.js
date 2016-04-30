/**
* web server app file
* require plugins
*/
var connect = require('connect');
var path = require('path');

var querystring = require('querystring');
var router = require('../my_midware/router');


/**
* create connect server
*/
var app = connect();


/**
* use middleware
*/
app.use(router);


module.exports = app;