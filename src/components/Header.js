import React, { Component } from 'react';
import Intro from './Intro';
import SocialLinks from './SocialLinks';

class Header extends Component {
  render() {
    return (
      <header className="header ph5-l pv5-l">
        <h1 className="title">
          Philip<br />Harrell
        </h1>
        <Intro />
        <SocialLinks />
      </header>
    );
  }
}

export default Header;
