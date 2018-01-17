import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class Footer extends Component {
  render() {
    return (
      <footer className="bt-10 ph5 pt2 pb4">
        <div className="content">
          <SocialLinks />
        </div>
      </footer>
    );
  }
}

export default Footer;
