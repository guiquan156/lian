/**
* web server app file
* require plugins
*/
var connect = require('connect');
var path = require('path');
var url = require('url');
var querystring = require('querystring');

/**
* create connect server
*/
var app = connect();


//define global value
global.BASE_PATH = path.resolve(__dirname, '..');
global.VIEWS_PATH = path.join(BASE_PATH, 'views');
global.PUBLIC_PATH = path.join(BASE_PATH, 'public');
global.BUILD_PATH = path.join(PUBLIC_PATH, 'build');
global.ROUTER_PATH = path.join(BASE_PATH, 'router');


/**
* use middleware
*/
app.use(function router (req, res){
	var pathname = url.parse(req.url).pathname
	  , pathArr = pathname.split('/')
	  , arrLength = pathArr.length;

	//delete all emity values in array
	for(var i = 0; i < arrLength; i++){
		if(pathArr[0] === ''){
			pathArr.shift();
		}else{
			pathArr.push(pathArr.shift());
		}
	}
	pathArr[pathArr.length - 1] += '.js';

	console.log(pathArr[pathArr.length - 1]);

	//require the target js
	// require(path.join.apply(path.join, pathArr))(req, res);

	console.log(path.join.apply(path.join, pathArr));

	res.write(pathname);
	res.end();

});


module.exports = app;