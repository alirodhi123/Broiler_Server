var express = require('express');
var router = express.Router();
var Coba = require('../models/coba');
var BroilerSchema = require('../models/broiler_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  //Coba.find({}, function(err, data){
  BroilerSchema.find({}, function(err, data){
		res.render('index', {datasensor: data, title: "ACTION CONTROL"});
	});
});

module.exports = router;
