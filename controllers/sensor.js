var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');

exports.sensorGetAll = (req, res, next) => {
	BroilerSchema.find()
		.select('_id temp hum cdioksida amonia')
		.exec()
		.then(docs => {
			var response = {
				count: docs.length,
				sensor: docs.map(doc => {
					return{
						_id: doc._id,
						temp: doc.temp,
						hum: doc.hum,
						cdioksida: doc.cdioksida,
						amonia: doc.amonia,
						bat: doc.bat
					}
				})
			}
			console.log(response);
			res.status(200).json(response);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
}

exports.sensorCreate = (req, res, next) => {
	var sensor = new Sensor({
		_id: new mongoose.Types.ObjectId(),
		temp: req.body.temp,
		hum: req.body.hum,
		cdioksida: req.body.cdioksida,
		amonia: req.body.amonia,
		bat: req.body.bat
	});
	sensor
		.save()
		.then(result => {
			res.status(201).json({
			message: 'Handling POST to /sensor',
			createSensor: {
				temp: result.temp,
				hum: result.hum,
				cdioksida: result.cdioksida,
				amonia: result.amonia,
				bat: result.bat,
				_id: result._id
			}
		})
		.catch(err => {
			concole.log(err);
			res.status(500).json({
				error: err
			});
		});
	});
}

exports.sensorGetId = (req, res, next) => {
	var id = req.params.sensorId; //Get the ID
	Sensor.findById(id)
		.select('_id temp hum cdioksida amonia')
		.exec()
		.then(doc => {
			console.log("From database ", doc);
			if(doc){
				res.status(200).json({
					sensor: doc
				});	
			} else {
				res.status(404).json({
					message: 'Wrong ID!!'
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error:err
			});
		});
}

exports.sensorUpdate = (req, res, next) => {
	var id = req.params.sensorId;
	var updateOps = {};
	for (var ops of req.body){
		updateOps[ops.propName] = ops.value;
	}
	Sensor.update({_id: id}, { $set: updateOps})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
}

exports.sensorDeleteId = (req, res, next) => {
	var id = req.params.sensorId;
	Sensor.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: 'Sensor deleted'
			});
		})
		.catch(err => {
			res.status(500).json({
				error:err
			});
		});
}