import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Media from 'react-media'

import './index.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
        </div>
      </Router>
    );
  }
}

export default App;
