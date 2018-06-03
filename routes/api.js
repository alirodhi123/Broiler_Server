var express = require('express');
var router = express.Router();
var Coba = require('../models/coba');

/* GET home page. */
router.post('/create', function(req, res, next) {
  var coba = new Coba({
  	tca: req.body.TCA,
  	huma: req.body.HUMA,
  	co2: req.body.CO2,
  	nh3: req.body.NH3,
  });
  coba.save(function(err, data){
  	if (err) {return console.log(err);}
  	res.send("sukses bro");
  });
});

router.get('/', function(req, res, next) {
	Coba.find({}, function(err, data){
		res.render('index', {datasensor: data});
	});
});

router.get('/hapus', function(req, res, next) {
	Coba.remove({}, function(err, data){
		res.render('index', {datasensor: data});
	});
});


module.exports = router;
