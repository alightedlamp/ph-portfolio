// @format
import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a className="link white dim dib mr3" href="#about" title="About">
            About
          </a>
          <a
            className="link white dim dib mr3"
            href="#projects"
            title="Projects">
            Projects
          </a>
          <a className="link white dim dib mr3" href="#cv" title="CV">
            CV
          </a>
          <a className="link white dim dib" href="#contact" title="Contact">
            Contact
          </a>
        </nav>
      </header>
    );
  }
}

export default Nav;
