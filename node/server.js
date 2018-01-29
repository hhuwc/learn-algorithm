var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require("path");

var server = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.write('{"hode":10}');
    res.end();
});
server.listen(8080);
