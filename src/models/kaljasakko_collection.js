'use strict';

var mongoose = require('mongoose');

var kaljasakkoSchema = new mongoose.Schema({
	name: String,
	amount: Number,
	reason: String
});

var model = mongoose.model('kaljasakko', kaljasakkoSchema);

module.exports = model;