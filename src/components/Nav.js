// @format
import React, { Component } from 'react';

class Nav extends Component {
  scrollTo = e => {
    const location = document.querySelector(
      `#${e.target.getAttribute('data-location')}`
    ).offsetTop;
    window.scrollTo({
      behavior: 'smooth',
      top: location - 50
    });
  };
  render() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l nav">
        <nav className="f6 fw6 ttu tracked">
          <a
            className="link white dim dib mr3"
            data-location="about"
            title="About"
            onClick={e => this.scrollTo(e)}
          >
            About
          </a>
          <a
            className="link white dim dib mr3"
            data-location="projects"
            title="Projects"
            onClick={e => this.scrollTo(e)}
          >
            Projects
          </a>
          <a
            className="link white dim dib"
            data-location="contact"
            title="Contact"
            onClick={e => this.scrollTo(e)}
          >
            Contact
          </a>
        </nav>
      </header>
    );
  }
}

export default Nav;
