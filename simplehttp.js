var http = require('http');
var fs = require('fs')


var server = http.createServer(function (request, response) {
	console.log(request.url);
	switch (request.url) {
		case '/':
		case '/index.js':
			var fileName = request.url.substring(1);
			fileName==''?fileName = 'index.html':true;
			console.log(fileName);
			response.writeHead(200, { "Content-Type": "text/html" });
			fs.readFile(fileName, 'utf8', function(err, data){
				response.write(data);
				response.end();
			});
		break;
		case '/data':
			response.writeHead(200, { "Content-Type": "text" });
			response.write('Hi there, I see you have requested for data, here is a random number for you ' + Math.random());
			response.end();
		break;
		default: 
			response.writeHead(200, { "Content-Type": "text" });
			response.write('Sorry I couldn\'t find that');
			response.end();
		
	}

	/*response.writeHead(200, { "Content-Type": "text/html" });
	response.write("<!DOCTYPE \"html\">");
	response.write("<html>");
	response.write("<head>");
	response.write("<title>Hello World Page</title>");
	response.write("</head>");
	response.write("<body>");
	response.write("Hello World!");
	response.write("</body>");
	response.write("</html>");
	response.end();*/
});

server.listen(8081);
console.log("Server is listening");
