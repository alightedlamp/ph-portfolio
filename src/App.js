// @format
import React, { Component } from 'react';
import './assets/css/styles.css';

import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <div className="app-container">
          <MainContent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
