var express = require('express')
var server = express.createServer()
var zmq = require('zmq')
var sock = zmq.socket('push')

sock.bindSync('tcp://127.0.0.1:3000')

server.get('/work', function(req, res){
	sock.send(JSON.stringify({foo : 'bar'}));
	res.send({status : 'OK'})
})

server.listen(8000)

