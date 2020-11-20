const server = require('http').createServer();
const io = require('socket.io')(server);
const axios = require('axios');
const {
	parse
} = require('path');

const sessions = {};
class fila {
	static name = 0;
	static setFila() {
		this.name += 1;
	}

	static getFila() {
		return this.name;
	}
}
class queue {
	name = 0;
	socketId = "";

	setSocket(socket) {
		this.socketId = socket;
	}
	getSocket() {
		return this.socketId;
	}
	getFila() {
		return this.name;
	}
	constructor(socket, name) {
		this.name = name;
		this.socketId = socket;
	}
}

const filaDeUsuarios = [];
const vez = 000001;
io.on('connection', socket => {
	// const code = `${Math.floor(Math.random() * 5)}`.padStart(1, '0');
	// sessions[code] = {
	// 	socket,
	// 	status: 'waiting_call'
	// };
	socket.on('message', (msg) => {
		console.log(msg);
	})
	socket.emit('code', "4546");
	// socket.emit('status', sessions[code].status);
	// socket.join("");
	// socket.on('user', (user) => {
	// 	let user2 = new queue(socket.id, user);
	// 	filaDeUsuarios.push(user2)
	// 	if (user == fila.getFila()) {
	// 		filaDeUsuarios.forEach(teste => {
	// 			const number = 1 + parseFloat(user);
	// 			if (teste.name == number) {
	// 				console.log("enviei " + teste.name + " -- user : " + user);
	// 				socket.broadcast.to(teste.socketId).emit('resposta', "É SUA VEZ ");
	// 			}
	// 		});
	// 		fila.setFila();
	// 	} else {
	// 		// console.log(" CHEGOU sss " + socket.id + " - " + user);
	// 		console.log("fila : " + fila.getFila() +" - user : " + user);
	// 		socket.broadcast.emit('resposta', "NAO É SUA VEZ ");
	// 	}
	// });
});

server.listen(3333);