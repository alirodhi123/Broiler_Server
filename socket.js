module.exports = function(io){
	var userSocket = 0;

	io.on('connection', function(socket){
		userSocket++;
		console.log('User connected: ', userSocket);

		socket.on('relay1', function(data){
			console.log('Relay 1: ', data.status);
			io.emit('relay1', {status: data.status});
		});

		socket.on('relay2', function(data){
			console.log('Relay 2: ', data.status);
			io.emit('relay2', {status: data.status});
		});

		socket.on('relay3', function(data){
			console.log('Relay 3: ', data.status);
			io.emit('relay3', {status: data.status});
		});

		socket.on('relay4', function(data){
			console.log('Relay 4: ', data.status);
			io.emit('relay4', {status: data.status});
		});

		socket.on('disconnect', function(){
			console.log('User disconnect!');
		});
	});
};
