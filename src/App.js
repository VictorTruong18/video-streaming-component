import React, { Component } from "react";
import Player from "./components/video-stream/video-streaming.component.jsx";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello</h1>
				<Player 
					url = {'http://localhost:3000/assets/sample1/sample.m3u8'}
					widthChoice = {800}
					heightChoice = {500}
					autoplay = {true}
					backgroundColor = {'#000'}
				/>
			</div>
		);
	}
}

export default App;
