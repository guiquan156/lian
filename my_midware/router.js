var fs = require('fs');
var path = require('path');
var url = require('url');
var path = require('path');

module.exports = function (req, res){
	var pathname = url.parse(req.url).pathname
	  , pathArr = pathname.split('/')
	  , arrLength = pathArr.length
	  , staticArr;

	if(pathname == '/'){
		// console.log(path.join(ROUTER_PATH, 'index'));
		require(path.join(ROUTER_PATH, 'index'))(req, res);
		// res.end();
	}else if(pathname == '/favicon.ico'){
		//todo favicon.ico pathname;
		res.end();
	}else if(pathname.match('/public/build')){//static resource router
		fs.readFile(path.join(BASE_PATH, pathname), function(err, data){
			if(err) throw err;

			if(pathname.match('/public/build/css'))
				res.setHeader('content-type', 'text/css');
			res.write(data);
			res.end();
		});

	}else{
		//delete all emity values in array
		for(var i = 0; i < arrLength; i++){
			if(pathArr[0] === ''){
				pathArr.shift();
			}else{
				pathArr.push(pathArr.shift());
			}
		}

		pathArr.unshift(ROUTER_PATH);
		//disable to find index
		pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace('.html', '.js');
		//require the target js
		require(path.join.apply(path.join, pathArr))(req, res);
	}
}


