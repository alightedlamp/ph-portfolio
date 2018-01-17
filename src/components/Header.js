import React, { Component } from 'react';
import Intro from './Intro';
import SocialLinks from './SocialLinks';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">
          Philip<br />Harrell
        </h1>
        <Intro />
        <div className="bt-10 mt3">
          <SocialLinks />
        </div>
      </header>
    );
  }
}

export default Header;
