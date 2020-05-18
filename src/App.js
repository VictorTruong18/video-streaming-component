import React, { Component } from 'react';
import Player from './components/video-stream/video-streaming.component.jsx'

import './App.css';

class App extends Component {


  render(){
    return (
      <div className="App">
         
          <h1>Hello</h1>
          <Player />
      </div>
    );
}
 
}

export default App;
