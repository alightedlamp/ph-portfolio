import React, { Component } from 'react';

import About from './content/About';
import Projects from './content/Projects';
import Contact from './content/Contact';

class MainContent extends Component {
  render() {
    return (
      <div> 
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default MainContent;
