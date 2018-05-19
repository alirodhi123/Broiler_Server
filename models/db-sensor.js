var mongoose = require ('mongoose');

var sensorSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	sensor_value: {type: Number, required: true}
});

module.exports = mongoose.model('Sensor', sensorSchema);