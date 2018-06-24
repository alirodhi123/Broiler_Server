var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');
var async = require('async');

// Get log lamp
exports.getLogAll = (req, res)=>{
	async.series({
   		logs: function(cb){
    		BroilerSchema.findById("5b2cc36cadbf751d34d76a67").exec(function(err, data){
     			if(err){
     				return console.log(err);	
     			} 
     		cb(err, data.logs);
    		});
   		}
  	}, function(err, data){
   			return res.status(200).json({
     			status: "success",
     			message: "Berhasil mendapatkan data log",
     			//data: data.logs
   			});
  		});
}

// exports.getLogAll = function(req, res){
//  BroilerSchema.aggregate([
//   // {
//   //   $match: {
//   //     _id: mongoose.Types.ObjectId(req.params.noteId)
//   //   }
//   // },
//   {
//    $unwind: "$logs"
//   },
//   {
//    $project: {
//     logs: 1
//    }
//   },
//   {
//    $sort: {
//     "logs.tanggal": -1
//    }
//   }
//  ]).exec(function(err, result){
//  	if (err) {
//  		res.status(404).send({
//  			message: err
//  		});
//  	} else {
//  		res.status(200).send({
//  			status: "success",
//  			message: "berhasil",
//  			data: result
//  		});
//  	}
//    //res.json(result);
//  });
// };


// // Get log fan
// exports.getLogFan = (req, res)=>{
// 	async.series({
//    		fan: function(cb){
//     		BroilerSchema.findById("5b2cc36cadbf751d34d76a67").exec(function(err, data){
//      			if(err){
//      				return console.log(err);	
//      			} 
//      		cb(err, data.fan);
//     		});
//    		}
//   	}, function(err, data){
//    			return res.status(200).json({
//      			status: "success",
//      			message: "Berhasil mendapatkan data log fan",
//      			data: data.fan
//    			});
//   		});
// }

// // Get log spray
// exports.getLogSpray = (req, res)=>{
// 	async.series({
//    		spray: function(cb){
//     		BroilerSchema.findById("5b2cc36cadbf751d34d76a67").exec(function(err, data){
//      			if(err){
//      				return console.log(err);	
//      			} 
//      		cb(err, data.spray);
//     		});
//    		}
//   	}, function(err, data){
//    			return res.status(200).json({
//      			status: "success",
//      			message: "Berhasil mendapatkan data log spray",
//      			data: data.spray
//    			});
//   		});
// }

// // Get log exhaust fan
// exports.getLogExhaust = (req, res)=>{
// 	async.series({
//    		exhaust: function(cb){
//     		BroilerSchema.findById("5b2cc36cadbf751d34d76a67").exec(function(err, data){
//      			if(err){
//      				return console.log(err);	
//      			} 
//      		cb(err, data.exhaust);
//     		});
//    		}
//   	}, function(err, data){
//    			return res.status(200).json({
//      			status: "success",
//      			message: "Berhasil mendapatkan data log exhaust fan",
//      			data: data.exhaust
//    			});
//   		});
// }

// Create Log Lamp
exports.createLogsLamp = function(req, res){
	var id_user = "5b2cc36cadbf751d34d76a67";
	var pushLogsLamp = {
		$push: {
			logs: {
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

// Create Log Fan
exports.createLogsFan = function(req, res){
	var id_user = "5b2cc36cadbf751d34d76a67";
	var pushLogsFan = {
		$push: {
			logs: {
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

// Create Log Spray
exports.createLogsSpray = function(req, res){
	var id_user = "5b2cc36cadbf751d34d76a67";
	var pushLogsSpray = {
		$push: {
			logs: {
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

// Create Log Exhaust fan
exports.createLogsExhaust = function(req, res){
	var id_user = "5b2cc36cadbf751d34d76a67";
	var pushLogsExhaust = {
		$push: {
			logs: {
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