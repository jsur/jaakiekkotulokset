'use strict';

var express = require('express');

var router = express.Router();


router.get('/login', function(req, res) {
	if(res.statusCode === 200)
		res.render('login');
	else
		alert('Network error, please try again later.');
});

module.exports = router;