module.exports = function(io){
	var userSocket = 0;

	io.on('connection', function(socket){
		userSocket++;
		console.log('User connected: ', userSocket);

		socket.on('relay1', function(data){
			console.log('Relay Lamp: ', data.status);
			io.emit('relay1', {status: data.status});
		});

		socket.on('relay2', function(data){
			console.log('Relay Fan: ', data.status);
			io.emit('relay2', {status: data.status});
		});

		socket.on('relay3', function(data){
			console.log('Relay Spray: ', data.status);
			io.emit('relay3', {status: data.status});
		});

		socket.on('relay4', function(data){
			console.log('Relay Exhaust: ', data.status);
			io.emit('relay4', {status: data.status});
		});

		socket.on('readsensor', function(data){
			console.log('Waspmote sensor gas: ', data.status);
			io.emit('readsensor', {status: data.status});
		});

		socket.on('disconnect', function(){
			userSocket--;
			console.log('User disconnect!', userSocket);

		});
	});
};
