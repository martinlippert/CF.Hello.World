/*jshint node:true */

/* This simple example just returns static content */

var port = (process.env.VCAP_APP_PORT || 3000);
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hellow World from CloudFoundry\n');
}).listen(port);
