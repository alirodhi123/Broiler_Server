var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BroilerSchema = require('../models/broiler_model');

var UserController = require('../controllers/user');

router.post('/', UserController.createUser);

module.exports = router;