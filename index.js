'use strict';

var http = require('http');

var requestData = ''; 
http.createServer(function(req, res) {
  

    req.on('data', function(chunk) {
        requestData += chunk.toString();
    });
    req.on('end', function() {
        res.writeHead(200, 'OK', {'Content-Type' : 'text/plain'});
        res.end(requestData);
    })
    
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');