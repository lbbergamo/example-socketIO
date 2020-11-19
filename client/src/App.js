import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001');

function App() {
	const [code, setCode] = useState(0);
	const [status, setStatus] = useState('');
	const [video, setVideo] = useState(1);
	const [resposta, setResposta] = useState('');
	
	useEffect(() => {
		socket.on('code', (code) => {
			setCode(code)
		});
		socket.on('code', (code) => {
			socket.emit('user', code);
		});
		socket.on('resposta', (resposta) => {
			setResposta(resposta)
		})
		setTimeout(() => setVideo(2), 14000);
	}, []);
	return (
		<div>
			<h2>{ code }</h2>
			<h2>{ resposta }</h2>
			<h2>{ status }</h2>
		</div>
	);
}

export default App;
