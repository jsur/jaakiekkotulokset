'use strict';

const express = require('express');
const router = express.Router();
const dataservice = require('./dataservice.js')
const _ = require('lodash');

router.get('/', function(req, res) {
    dataservice.getFinhockeyData().then(function(data) {
    	var data1 = _.orderBy(data.teams, [function(o) { return parseInt(o.Ranking, 10); }], ['asc']); 
        res.render('index', { data1: data1 });
    }).catch(function(err) {
        // epic fail, handle error here
    });
});

router.get('/kaljasakot', function(req, res) { 
    res.render('kaljasakot');
    });

module.exports = router;