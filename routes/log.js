var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BroilerSchema = require('../models/broiler_model');
var LogController = require('../controllers/log');

router.get('/get-log', LogController.getLogAll);

// router.get('/get-log/fan', LogController.getLogFan);

// router.get('/get-log/spray', LogController.getLogSpray);

// router.get('/get-log/exhaust', LogController.getLogExhaust);

router.post('/log-lamp', LogController.createLogsLamp);

router.post('/log-fan', LogController.createLogsFan);

router.post('/log-spray', LogController.createLogsSpray);

router.post('/log-exhaust', LogController.createLogsExhaust);

module.exports = router;