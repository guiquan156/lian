var fs = require('fs');
var querystring = require('querystring');
var formidable = require('formidable');
var form = new formidable.IncomingForm();

var allowMIME = ['text/html']



module.exports = function(req, res){
	//only the "post" method can upload
	if(req.method !== 'POST'){
		res.writeHeader(302, { 'Location': '/' });
		res.end();
	}
	var result = {};





	// config form 
	form.uploadDir = './upload';
	form.keepExtensions = true;
	form.maxFieldsSize = 10 * 1024 * 1024;


	// form.on('fileBegin', function(name, file){
	// 	for(var i=0; i<allowMIME.length; i++){
	// 		if(file.type === allowMIME[i]){
	// 			form.parse(req, function(error, fields, files){
	// 				fs.renameSync(files.upload.path, 'upload/test.html');
	// 				res.writeHead(200, {"content-type": "text/plain"});
	// 				res.write('upload success!!!');
	// 				res.end();
	// 			});
	// 		}else{
	// 			res.writeHead(200, {"content-type": "text/plain"});
	// 			res.write('failure!!!');
	// 			res.end();
	// 		}
	// 	}
	// });

	form.parse(req, function(error, fields, files){
		fs.renameSync(files.upload.path, 'upload/test.html');
		res.writeHead(200, {"content-type": "text/plain"});
		res.write('upload success!!!');
		res.end();
	});


}