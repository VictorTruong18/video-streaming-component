import React, { Component } from 'react';
import Player from './components/video-stream/video-streaming.component'

import './App.css';

class App extends Component {


  render(){
    return (
      <div className="App">
          <h1>Fred The Rabbit : The Missing Chicha</h1>

          <Player />
      </div>
    );
}
 
}

export default App;
