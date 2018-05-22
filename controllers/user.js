var BroilerSchema = require('../models/broiler_model');
var mongoose = require('mongoose');

exports.createUser = (req, res) => {
	var create_user = new BroilerSchema({
        farmer        : req.body.farmer,
        relay     : {
           	lamp        : false,
            fan     	: false,
           	spray    	: false,
            exhaust     : false
        }
    });

	 create_user.save(function(err, data) {
	  if(err) {
	   console.log(err);
	   res.status(500).send({message: "Some error occurred while creating the user"});
	  } else {
	   res.send(data);
	  }
	 });
}