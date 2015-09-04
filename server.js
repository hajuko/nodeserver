var express = require('express');
var app = express();
var port = 1337;

app.use(express.static('public'));

app.listen(port);
console.log('Server started at port: ' + port);

