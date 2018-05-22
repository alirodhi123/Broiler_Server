var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BroilerSchema = require('../models/broiler_model');

var SensorController = require('../controllers/sensor');

router.get('/', SensorController.sensorGetAll);

router.post('/', SensorController.sensorCreate);

router.get('/:sensorId', SensorController.sensorGetId);

router.patch('/:sensorId', SensorController.sensorUpdate);

router.delete('/:sensorId', SensorController.sensorDeleteId);

module.exports = router;