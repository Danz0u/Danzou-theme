import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import Media from 'react-media'

import './index.css';

import Header from './components/Header';
import MainContent from './components/MainContent';

/*
const anime = {
  'title': 'Shingeki no Kyojin',
  'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuvzbOQArqzbglE5074jfoBQ2atNJmxbYIj9tcRs-UQFHN_rIzQ'
};
*/

class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <Header/>
          <MainContent/>
        </div>
      </Router>
    );
  }
}

export default App;
