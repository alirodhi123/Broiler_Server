var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');
var async = require('async');

exports.getRelayState = (req, res) => {
	var id_user = "5b2cc36cadbf751d34d76a67";
	BroilerSchema.findById(id_user, (err, data) => {
		if(err){
			return console.log(err);
		}
		res.json(data.relay);
		console.log(data.relay);
	});
};

exports.updateRelayLamp = (req, res) => {
	var id_user = "5b2cc36cadbf751d34d76a67";
	var updateState = {
		"relay.lamp": req.body.state
	}
	BroilerSchema.findByIdAndUpdate(id_user, updateState, function(err, data){
		if(err){
			return console.log(err);
		}
		BroilerSchema.findById(id_user, (err, result) => {
			res.json(result.relay);
		});
	});
};

exports.updateRelayFan = (req, res) => {
	var id_user = "5b2cc36cadbf751d34d76a67";
	var updateState = {
		"relay.fan": req.body.state
	}
	BroilerSchema.findByIdAndUpdate(id_user, updateState, function(err, data){
		if(err){
			return console.log(err);
		}
		BroilerSchema.findById(id_user, (err, result) => {
			res.json(result.relay);
		});
	});
};

exports.updateRelaySpray = (req, res) => {
	var id_user = "5b2cc36cadbf751d34d76a67";
	var updateState = {
		"relay.spray": req.body.state
	}
	BroilerSchema.findByIdAndUpdate(id_user, updateState, function(err, data){
		if(err){
			return console.log(err);
		}
		BroilerSchema.findById(id_user, (err, result) => {
			res.json(result.relay);
		});
	});
};

exports.updateRelayExhaust = (req, res) => {
	var id_user = "5b2cc36cadbf751d34d76a67";
	var updateState = {
		"relay.exhaust": req.body.state
	}
	BroilerSchema.findByIdAndUpdate(id_user, updateState, function(err, data){
		if(err){
			return console.log(err);
		}
		BroilerSchema.findById(id_user, (err, result) => {
			res.json(result.relay);
		});
	});
};

exports.updateRelaySensor = (req, res) => {
	var id_user = "5b2cc36cadbf751d34d76a67";
	var updateState = {
		"relay.sensor": req.body.state
	}
	BroilerSchema.findByIdAndUpdate(id_user, updateState, function(err, data){
		if(err){
			return console.log(err);
		}
		BroilerSchema.findById(id_user, (err, result) => {
			res.json(result.relay);
		});
	});
};

