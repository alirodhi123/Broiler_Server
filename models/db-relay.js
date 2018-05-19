var mongoose =  require('mongoose');

var relaySchema = mongoose.Schema({
	lamp: {type: Boolean, required: true},
	fan: {type: Boolean, required: true},
	spray: {type: Boolean, required: true} 
});

module.exports = mongoose.model('Relay', relaySchema);