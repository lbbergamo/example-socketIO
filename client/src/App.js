import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
const socket = io('http://localhost:3333', {
	withCredentials: true,
	extraHeaders: {
		"my-custom-header": "abcd"
	}
});
function App() {

	const [code, setCode] = useState(0);
	// const [status, setStatus] = useState('');
	// const [resposta, setResposta] = useState('');
	
	useEffect(() => {
		// socket.on('code', (code) => {
		// 	setCode(code)
		// });
		socket.on('code', (code) => {
			socket.emit('user', code);
		});
		socket.emit('message', "to chegando")
	}, []);
	return (
		<div>
			<h2>{ code }</h2>
			{/* <h2>{ resposta }</h2>
			<h2>{ status }</h2> */}
		</div>
	);
}

export default App;
