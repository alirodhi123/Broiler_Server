var mongoose = require('mongoose');
var broilerSchema = mongoose.Schema({
	tca: String,
	huma: String,
	co2: String,
	nh3: String,
});

module.exports = mongoose.model('coba', broilerSchema);