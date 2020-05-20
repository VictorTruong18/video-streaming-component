# Video Web Streaming React Component

React web component to stream video on any web page, using the hls.js library. You can simply add the 'video-streaming-component.jsx' file to your project and let it do the work for you !

## Example :

![Video%20Web%20Streaming%20React%20Component%20b226c84953e341709bd59d1022243a08/Screen_Shot_2020-05-20_at_17.45.18.png](Video%20Web%20Streaming%20React%20Component%20b226c84953e341709bd59d1022243a08/Screen_Shot_2020-05-20_at_17.45.18.png)

## The Code :

```jsx
import React, { Component } from "react";
import Player from "./components/video-stream/video-streaming.component.jsx";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Web Component Streaming React Demo</h1>
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
```

The code for the whole demonstration is on this repository. Feel free to only move the 'video-streaming-component.jsx' file to your files, run some installs, and then enjoy the magic !

## How to use the url props ?

We access our video by putting them on the "public" folder for it to be reachable by an URL.

```jsx
url = {'http://localhost:3000/assets/sample1/sample.m3u8'}
```

If you have already deployed your website replace localhost by the name of your domain.

Disclaimer : the hls.js library only take .m3u8 files

## Special thanks to :

Dailymotion and Societe Generale

![Video%20Web%20Streaming%20React%20Component%20b226c84953e341709bd59d1022243a08/Logo_dailymotion.png](Video%20Web%20Streaming%20React%20Component%20b226c84953e341709bd59d1022243a08/Logo_dailymotion.png)

![Video%20Web%20Streaming%20React%20Component%20b226c84953e341709bd59d1022243a08/logo-societe-generale.png](Video%20Web%20Streaming%20React%20Component%20b226c84953e341709bd59d1022243a08/logo-societe-generale.png)