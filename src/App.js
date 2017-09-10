import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import ButtonAddPrototype from './ButtonAddPrototype.js';
import ProgressBarPrototype from './ProgressBarPrototype.js';
import Calculator from './calculator/Calculator.js';
import BingAds from './bingads/index.js';
import logo from './logo.svg';
import './App.css';

ReactDOM.render(
  <ButtonAddPrototype />, 
 document.getElementById('buttonadd')
);

ReactDOM.render(
   <ProgressBarPrototype />, 
  document.getElementById('progressbar')
);

ReactDOM.render(
   <Calculator />, 
  document.getElementById('calculator')
);

ReactDOM.render(
  <BingAds />,
  document.getElementById('miniBingAds')
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
