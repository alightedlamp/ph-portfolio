import React, { Component } from 'react';
import Intro from './Intro';

class Header extends Component {
  render() {
    return (
      <header className="header ph5-l pv5-l">
        <h1 className="title">Philip Harrell</h1>
        <Intro />
      </header>
    )
  }
}

export default Header;
