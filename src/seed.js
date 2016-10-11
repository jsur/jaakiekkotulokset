'use strict';

var Kaljasakko = require('./models/kaljasakko_collection.js');

var kaljasakot = [{
		name: 'Julius',
		amount: 7
}
];

kaljasakot.forEach(function(kaljasakko, index) {
	Kaljasakko.find({'name': kaljasakko}, function(err, kaljasakot) {
		if(!err && !kaljasakot.length) {
			Kaljasakko.create({amount: 0, name: kaljasakko});
		};
	});
});


var kaljatesti = new Kaljasakko({ name: 'Julius', amount: 7 });
console.log(kaljatesti.name); // 'Julius'
console.log(kaljatesti.amount); // '7'
kaljatesti.save(function(err, kaljatesti) {
	if(err) return console.error(err);
	console.log('Saved ' + kaljatesti.name + ' into DB.');
})
