var fs = require('fs');

module.exports = function(req, res){
	//only the "post" method can upload
	if(req.method !== 'POST'){
		res.writeHeader(302, { 'Location': '/' });
	}

	var _fileName = req.headers['file-name'];

	console.log('the request is routed here!!!');

	req.once('data', function(data){
		console.log('file writting...');
		fs.writeFile(_fileName, data);
	});
	res.end();
}