import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import MainContent from './components/MainContent';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <MainContent />
        </div>
      </Router>
    );
  }
}

export default App;