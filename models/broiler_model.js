var mongoose = require('mongoose');
var broilerSchema = mongoose.Schema({
	farmer: String,
	relay:{
		lamp: Boolean,
		fan: Boolean,
		spray: Boolean,
		exhaust: Boolean,
		sensor: Boolean
	},
	logs:[{
		jenis: String,
		keterangan: String,
		tanggal: {type: Date, default: Date.now}
	}],
	sensor:[{
		temp: Number,
		hum: Number,
		cdioksida: Number,
		amonia: Number,
		bat: Number,
		tanngal: {type: Date, default: Date.now}
	}],
	lamp:[{
		title: String,
		keterangan: String,
		tanggal: {type: Date, default: Date.now}
	}],
	fan:[{
		title: String,
		keterangan: String,
		tanggal: {type: Date, default: Date.now}
	}],
	spray:[{
		title: String,
		keterangan: String,
		tanggal: {type: Date, default: Date.now}
	}],
	exhaust:[{
		title: String,
		keterangan: String,
		tanggal: {type: Date, default: Date.now}
	}],
});

module.exports = mongoose.model('BroilerSchema', broilerSchema);