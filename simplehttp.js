//importing stuff so we can use later
var http = require('http');
var fs = require('fs')

//here we create an http server using nodejs http class
var server = http.createServer(function (request, response) {
	//log the url we got a request from just for fun
	console.log(request.url);

	//based on url we choose to send different things, so we use a switch
	switch (request.url) {
		//if we get / or index.js we choose to send the files from our file system
		case '/':
		case '/index.js':
			var fileName = request.url.substring(1);
			fileName==''?fileName = 'index.html':true;
			console.log(fileName);
			//tell the client that we are going to send html data
			//we should have added a js part but modern browsers are smart
			//and html is just ok for js and css
			response.writeHead(200, { "Content-Type": "text/html" });
			//we read the requested file asynchronously and send it to the client
			fs.readFile(fileName, 'utf8', function(err, data){
				response.write(data);
				//this line actually does the sending.
				response.end();
			});
		break;
		//if we are asked for data send it to the client :D
		case '/data':
			//tell our client that we are going to send a text data
			response.writeHead(200, { "Content-Type": "text" });
			//write a message, and add some random number as data
			response.write('Hi there, I see you have requested for data, here is a random number for you ' + Math.random());
			//same as above, send it in
			response.end();
		break;
		//and if we are requested for something we dont have
		//tell that to the client
		default: 
			//same as above :D
			response.writeHead(200, { "Content-Type": "text" });
			response.write('Sorry I couldn\'t find that');
			response.end();
		
	}
});

//tell our server to listen to the port 8081
//the default is 80 but since it is going to 
//run in my production server 80 is reserved
//for other things (like websites :D)
server.listen(8081);
console.log("Server is listening");
