import React, { Component } from 'react';
import './App.css';
import Header from './layouts/Header.jsx';
import KeyBoardContainer from './containers/KeyboardContainer';
import SongsContainer from './containers/SongsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <KeyBoardContainer></KeyBoardContainer>
          <SongsContainer></SongsContainer>
        </div>
      </div>
    );
  }
}

export default App;
