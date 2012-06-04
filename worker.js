var zmq = require('zmq')
var sock = zmq.socket('pull')

sock.connect('tcp://127.0.0.1:3000');

sock.on('message', function(msg){
	// dump message to database
	console.log(msg.toString())
	
});

