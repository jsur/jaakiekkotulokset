'use strict';

const express = require('express');
const router = express.Router();
const dataservice = require('./dataservice.js')
const _ = require('lodash');
const Kaljasakko = require('../models/kaljasakko_collection.js');
const errormessage = "<h1>Server error occurred. Please come again.</h1>"

//GET

router.get('/', function(req, res) { 
    Kaljasakko.collection.find().toArray(function(err, items) {
        res.render('kaljasakot', { items: items }); 
        })
    });

router.get('/sarjataulukko', function(req, res) {
    dataservice.getFinhockeyStandingsData().then(function(data) {
    	var data1 = _.orderBy(data.teams, [function(o) { return parseInt(o.Ranking, 10); }], ['asc']); 
        res.render('sarjataulukko', { data1: data1 });
    }).catch(function(err) {
        res.render(errormessage);
    });
});

router.get('/otteluohjelma', function(req, res){
    dataservice.getFinhockeyGamesData().then(function(data) {
        res.render('otteluohjelma', {data: data});
    }).catch(function(err) {
        res.render(errormessage)
    });
});

router.get('/pisteporssi', function(req, res){
    dataservice.getFinhockeyPlayerStatisticsData().then(function(data) {
        var data1 = _.orderBy(data.players, [function(o) { return parseInt(o.Points, 10); }], ['desc']); 
        res.render('pisteporssi', {data1: data1});
    }).catch(function(err) {
        res.render(errormessage)
    });
});

//POST or PUT

router.post('/', function(req, res) {
    var kaljasakko = req.body;
    Kaljasakko.create(kaljasakko, function(err, kaljasakko) {
        if(err) {
            return res.status(500).json({err: err.message});
        }
        console.log("Sakko created.");
        res.send(kaljasakko._id);
        })
    });

router.put('/:id', function(req, res) {
    var id = req.params.id;
    var kaljasakko = req.body;
    if(kaljasakko && kaljasakko._id !== id) {
        return res.status(500).json({err: "Ids don't match!"})
    }
    Kaljasakko.findByIdAndUpdate(id, kaljasakko, {new: true}, function(err, todo) {
        if(err) {
            return res.status(500).json({err: err.message});
        }
        res.json({'kaljasakko': kaljasakko, message: 'Sakko updated.'});
    })
});

//DELETE



module.exports = router;
