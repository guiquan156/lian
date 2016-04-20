/**
* web server app file
* require plugins
*/
var connect = require('connect');
var path = require('path');
var url = require('url');
var querystring = require('querystring');
// var router = require(path.join(MY_MIDWARE_PATH, 'router.js'));

/**
* create connect server
*/
var app = connect();


/**
* use middleware
*/
// app.use(router(req, res));


module.exports = app;