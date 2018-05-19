var mongoose = require('mongoose');

var logSchema = mongoose.Schema({
	status_relay: {type: String, required: true},
	keterangan: {type: String, required: true},
	tanggal: {type: Date, default: Date.now}
});