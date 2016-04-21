var fs = require('fs');
var path = require('path');
var template = require('art-template');

module.exports = function(req, res){
	var data = {
		public_path: 'http://' + req.headers.host + '/public'
	}
	var html = template(path.join(VIEWS_PATH, 'index', 'index'), data);
	res.write(html);
	res.end();
};