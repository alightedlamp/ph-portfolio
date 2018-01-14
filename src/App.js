// @format
import React, {Component} from 'react';
import './assets/css/styles.css';
import Intro from './components/Intro';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="app-container">
          <header className="header ph5-l">
            <h1 className="title">Philip Harrell</h1>
            <Intro />
          </header>
          <MainContent />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
