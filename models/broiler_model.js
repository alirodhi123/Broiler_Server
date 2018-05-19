var mongoose = require('mongoose');
var broilerSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	temp: Number,
	hum: Number,
	cdioksida: Number,
	amonia: Number,
	bat: Number,
	tanngal: {type: Date, default: Date.now},
	relay:{
		lamp: Boolean,
		fan: Boolean,
		spray: Boolean
	},
	logs:[{
		jenis: String,
		keterangan: String,
		tanggal: {type: Date, default: Date.now}
	}]
});

module.exports = mongoose.model('Broiler', broilerSchema);