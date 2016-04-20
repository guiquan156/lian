/*
	web start-up file
*/

var http = require('http');
var app = require('./app/app');
var test = 'test';

//get the port, default port is 3000
function getPort(){
	return process.env.NODE_PORT || 3000;
}
//create a server by ./app/app.js
http.createServer(app).listen(getPort());
