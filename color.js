var http = require('http'); 
var os = require('os'); 
var handleRequest = function (request, response) { 
    response.writeHead(200); 
   console.log('Hello World from HOST:' + os.hostname()); 
}; 
var helloServer = http.createServer(handleRequest); 
helloServer.listen(8080);