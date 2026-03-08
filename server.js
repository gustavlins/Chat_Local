//Express
var express = require('express')
var app = express()
var server = app.listen(3000)

app.use(express.static('public'))

//SocketIO

var socket = require('socket.io')
var io = socket(server)

io.sockets.on('connection', clientConnected)

function clientConnected(socket){
    console.log("Cliente Conectou!") 
    socket.on("mensagemEnviada", function(data){
        console.log(data.username + ": " + data.message) 
        io.emit("escreverMensagem", data)
    });
}