'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kaljasakot', function(err) {
	if(err) {
		console.log('Failed connecting to MongoDB!');
	} else {
		console.log('Successfully connected to MongoDB.');
	}
});