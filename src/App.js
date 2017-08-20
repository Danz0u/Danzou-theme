import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/