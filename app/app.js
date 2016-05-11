/**
* web server app file
* require plugins
*/
var connect = require('connect');
var path = require('path');
var url = require('url');
var querystring = require('querystring');
var router = require(MYMIDWARE_PATH + '/router');
var upload = require('jquery-file-upload-middleware');
// var bodyParser = require('body-parser');

/**
* create connect server
*/
var app = connect();

//configure upload middleware
// upload.configure({
// 	uploadDir: '../upload',
// 	uploadUrl: 'uploads',
// 	imageVersions: {
// 		thumbnail: {
// 			width: 80,
// 			heigh: 80
// 		}
// 	}
// });


/**
* use middleware
*/
app.use(router);


// app.use('/upload', upload.fileHandler());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

module.exports = app;