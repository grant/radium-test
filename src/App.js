import React, { Component } from 'react';
import Radium from 'radium';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={[styles.base]}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacttest</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

var styles = {
  base: {
    fontSize: '50px',
    color: 'blue',
  }
}

export default Radium(App);
