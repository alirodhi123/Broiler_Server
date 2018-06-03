var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');
var async = require('async');

// Log Lamp
exports.createLogsLamp = function(req, res){
	console.log( req.body.title);
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsLamp = {
		$push: {
			lamp: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsLamp, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};

// Log Fan
exports.createLogsFan = function(req, res){
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsFan = {
		$push: {
			fan: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsFan, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};

// Log Spray
exports.createLogsSpray = function(req, res){
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsSpray = {
		$push: {
			spray: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsSpray, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};

// Loh Exhaust fan
exports.createLogsExhaust = function(req, res){
	var id_user = "5b02dc72584ab60f90b5076b";
	var pushLogsExhaust = {
		$push: {
			exhaust: {
				title: req.body.title,
				keterangan: req.body.keterangan
			}
		}
	};
	BroilerSchema.findByIdAndUpdate(id_user, pushLogsExhaust, function(err, data){
		if (err) {
			return console.log(err);
		}
		res.json(data);
	});
};