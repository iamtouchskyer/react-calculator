import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import ButtonAddPrototype from './ButtonAddPrototype.js';
import logo from './logo.svg';
import './App.css';

ReactDOM.render(
  <ButtonAddPrototype />, 
 document.getElementById('container')
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          aTo get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
