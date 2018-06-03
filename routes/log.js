var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BroilerSchema = require('../models/broiler_model');
var LogController = require('../controllers/log');

router.post('/log-lamp', LogController.createLogsLamp);

router.post('/log-fan', LogController.createLogsFan);

router.post('/log-spray', LogController.createLogsSpray);

router.post('/log-exhaust', LogController.createLogsExhaust);

module.exports = router;