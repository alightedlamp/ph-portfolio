// @format
import React, { Component } from 'react';

class Nav extends Component {
  scrollTo = e => {
    const location = document.querySelector(
      `#${e.target.getAttribute('data-location')}`
    ).offsetTop;
    window.scrollTo({
      behavior: 'smooth',
      top: location - 75
    });
  };
  render() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l nav">
        <nav className="f6 fw6 ttu tracked">
          {['About', 'Projects', 'Creative', 'Contact'].map(link => (
            <a
              key={link}
              className="link white dim dib mr3"
              data-location={link.toLowerCase()}
              title={link}
              onClick={e => this.scrollTo(e)}
            >
              {link}
            </a>
          ))}
        </nav>
      </header>
    );
  }
}

export default Nav;
