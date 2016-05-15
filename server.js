var express = require('express');
var app = express();
var path = require('path');

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

app.use(express.static(__dirname + '/'))

app.listen(1337);


// var http = require('http'),
//     fs = require('fs');

// http.createServer(function(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'Access-Control-Allow-Origin': '*'
//   });

//   var readStream = fs.createReadStream(__dirname + '/index.html');

//   readStream.pipe(res);

// }).listen(1337);

console.log('Visit me at http://localhost:1337')