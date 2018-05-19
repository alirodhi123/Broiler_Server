var express = require('express');
var router = express.Router();
var Coba = require('../models/coba');

/* GET home page. */
router.get('/', function(req, res, next) {
  Coba.find({}, function(err, data){
		res.render('tampil', {datasensor: data, title: "ali"});
	});
});

module.exports = router;
