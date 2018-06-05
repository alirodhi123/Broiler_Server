var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BroilerSchema = require('../models/broiler_model');
var RelayController = require('../controllers/relay');

router.get('/get-relay/state', RelayController.getRelayState);

router.post('/update-relay/lamp', RelayController.updateRelayLamp);

router.post('/update-relay/fan', RelayController.updateRelayFan);

router.post('/update-relay/spray', RelayController.updateRelaySpray);

router.post('/update-relay/exhaust', RelayController.updateRelayExhaust);

router.post('/update-relay/sensor', RelayController.updateRelaySensor);

module.exports = router;