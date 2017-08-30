import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import flexboxgrid from 'flexboxgrid';

import Header from './components/Header';
import MainContent from './components/MainContent';
import AnimeBox from './components/AnimeBox';


const anime = {
  'linkDonwload': 'https://www.youtube.com/watch?v=aZenmeRytEM',
  'title': 'Noragami Aragoto',
  'epCount': 350,
  'description': 'Noragami! Caçador de Almas',
  'image': 'http://assistindoanimesonline.com/img/animes-dublados-legendados/N/Noragami.jpg'
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <MainContent>
            <section>
              <div className="row around-xs">
                <div class="col-xs-2">
                  <div class="box-nested">
                    <AnimeBox anime={anime} />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box-nested">
                    <AnimeBox anime={anime} />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box-nested">
                    <AnimeBox anime={anime} />
                  </div>
                </div>
              </div>
            </section>
          </MainContent>
        </div>
      </Router>
    );
  }
}

export default App;