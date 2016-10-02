'use strict'

var express = require('express');
var router = require('./api/router.js');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', express.static(__dirname + '/public'));
app.use('/', router);

app.listen(3000, function() {
	console.log("The server is running on port 3000.");
});