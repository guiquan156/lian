/*
	web start-up file
*/
var http = require('http');
var path = require('path');
var config = require('./config');

//define global value
global.BASE_PATH = __dirname;
global.VIEWS_PATH = path.join(BASE_PATH, 'views');
global.PUBLIC_PATH = path.join(BASE_PATH, 'public');
global.BUILD_PATH = path.join(PUBLIC_PATH, 'build');
global.ROUTER_PATH = path.join(BASE_PATH, 'router');
global.UPLOAD_PATH = path.join(BASE_PATH, 'upload');
global.MYMIDWARE_PATH = path.join(BASE_PATH, 'my_midware');


//use app sever
var app = require('./app/app');


//get the port, default port is 3000
function getPort(){
	return process.env.NODE_PORT || 3333;
}
//create a server by ./app/app.js
http.createServer(app).listen(getPort());
