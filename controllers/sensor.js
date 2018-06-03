var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');
var async = require('async');

// exports.sensorGetAll = (req, res, next) => {
// 	BroilerSchema.find()
// 		.select('_id temp hum cdioksida amonia')
// 		.exec()
// 		.then(docs => {
// 			var response = {
// 				count: docs.length,
// 				sensor: docs.map(doc => {
// 					return{
// 						_id: doc._id,
// 						temp: doc.temp,
// 						hum: doc.hum,
// 						cdioksida: doc.cdioksida,
// 						amonia: doc.amonia,
// 						bat: doc.bat
// 					}
// 				})
// 			}
// 			console.log(response);
// 			res.status(200).json(response);
// 		})
// 		.catch(err => {
// 			res.status(500).json({
// 				error: err
// 			});
// 		});
// }

exports.sensorGetAll = (req, res)=>{
	async.series({
   		sensor: function(cb){
    		BroilerSchema.findById("5b02dc72584ab60f90b5076b").exec(function(err, data){
     			if(err){
     				return console.log(err);	
     			} 
     		cb(err, data.sensor);
    		});
   		}
  	}, function(err, data){
   			return res.status(200).json({
     			status: "success",
     			message: "Berhasil mendapatkan data..",
     			data: data.sensor
   			});
  		});
}

exports.sensorCreate = async (req, res)=>{
	var id_user = "5b02dc72584ab60f90b5076b";
 	var dataSensor = {
 		$push: {
 			sensor: {
  				temp: req.body.TCA,
				hum: req.body.HUMA,
				cdioksida: req.body.CO2,
				amonia: req.body.NH3
				//bat: req.body.bat,
				//tanngal: req.body.tanngal
			}
		}
};
 BroilerSchema.findByIdAndUpdate(id_user, dataSensor, (err, data)=>{
 	if(err){
 		return console.log(err);	
 	} 
  	res.send(data);
 });
};
// exports.sensorCreate = (req, res, next) => {
// 	var sensor = new BroilerSchema({
// 		_id: new mongoose.Types.ObjectId(),
// 		temp: req.body.temp,
// 		hum: req.body.hum,
// 		cdioksida: req.body.cdioksida,
// 		amonia: req.body.amonia,
// 		bat: req.body.bat
// 	});
// 	sensor
// 		.save()
// 		.then(result => {
// 			res.status(201).json({
// 			message: 'Handling POST to /sensor',
// 			createSensor: {
// 				temp: result.temp,
// 				hum: result.hum,
// 				cdioksida: result.cdioksida,
// 				amonia: result.amonia,
// 				bat: result.bat,
// 				_id: result._id
// 			}
// 		})
// 		.catch(err => {
// 			concole.log(err);
// 			res.status(500).json({
// 				error: err
// 			});
// 		});
// 	});
// }

exports.sensorGetId = (req, res, next) => {
	var id = req.params.sensorId; //Get the ID
	BroilerSchema.findById(id)
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
	BroilerSchema.update({_id: id}, { $set: updateOps})
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
	BroilerSchema.remove({_id: id})
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