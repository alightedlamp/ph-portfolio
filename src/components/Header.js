import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">
          Philip<br />Harrell
        </h1>
        <div className="bt-10 mt3">
          <SocialLinks />
        </div>
      </header>
    );
  }
}

export default Header;
