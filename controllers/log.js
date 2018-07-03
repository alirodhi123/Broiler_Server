var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');
var async = require('async');

// exports.getLogAll = function(req, res){
//  var today = new Date();
//  var todayNight = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 00, 00, 00, 00);
//  console.log(todayNight)
//  BroilerSchema.aggregate([
//   // {
//   //   $match: {
//   //     _id: mongoose.Types.ObjectId(req.params.noteId)
//   //   }
//   // },

//   {
//    $project: {
//     log: {
//     	$filter: {
//     		input: "$logs",
//     		as: "lg",
//     		cond: {$gte: ["$$lg.tanggal", todayNight]}
//     	}
//     }
//    }
//   },
//     {
//    $unwind: "$log"
//   },
//   {
//    $sort: {
//     "log.tanggal": -1
//    }
//   },
//   {
//   	$group: {
//   		_id: "$_id",
//   		log: {
//   			$push: {
//   				"_id": "$log._id",
//                 "title": "$log.title",
//                 "keterangan": "$log.keterangan",
//                 "tanggal": "$log.tanggal"
//   			}
//   		}
//   	}
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
//  			data: result[0].log
//  		});
//  	}
//    //res.json(result);
//  });
// };

exports.getLogAll = function(req, res){
 var today = new Date();
 var todayNight = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), 00, 00, 00, 00);
 BroilerSchema.aggregate([
  // {
  //   $match: {
  //     _id: mongoose.Types.ObjectId(req.params.noteId)
  //   }
  // },
  {
   $unwind: "$logs"
  },
  {
   $project: {
    logs: 1,
    tanggal: {$gt: [todayNight, 100]}
   }
  },
  {
   $sort: {
    "logs.tanggal": -1
   }
  },
  {
  	$group: {
  		_id: "$_id",
  		log: {
  			$push: {
  				"_id": "$logs._id",
                "title": "$logs.title",
                "keterangan": "$logs.keterangan",
                "tanggal": "$logs.tanggal"
  			}
  		}
  	}
  }
 ]).exec(function(err, result){
 	if (err) {
 		res.status(404).send({
 			message: err
 		});
 	} else {
 		res.status(200).send({
 			status: "success",
 			message: "berhasil",
 			data: result[0].log
 		});
 	}
   //res.json(result);
 });
};


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