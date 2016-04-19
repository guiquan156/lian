var http = require('http');
var connect = require('connect');
var app = connect();


app.use(function(req, res){
	var query = url.parse('http://www.baidu.com?a=hahaha&b=hehehe').query;
	var parsedQuery = querystring.parse(query);
	res.write('hello world');
	res.end();
});

app.listen(3000);



// http.listen(3000);
