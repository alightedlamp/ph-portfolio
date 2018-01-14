// @format
import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav class="f6 fw6 ttu tracked">
          <a class="link white dim dib mr3" href="#about" title="About">About</a>
          <a class="link white dim dib mr3" href="#projects" title="Projects">Projects</a>
          <a class="link white dim dib" href="#contact" title="Contact">Contact</a>
        </nav>
      </header>
    );
  }
}

export default Nav;
