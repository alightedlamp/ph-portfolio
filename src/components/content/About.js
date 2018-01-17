import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about" className="bg-washed-yellow black ph5 pv5 center">
        <div className="content">
          <h2 className="f5 ttu mb3">About</h2>
          <p className="mb2">
            My background is in traditional drawing, painting, and ceramics,
            though I have always had a comfort and love for technology. I grew
            up building websites and began my studies in traditional software
            engineering and web development while earning my Bachelor of Fine
            Arts at UT Austin through their Elements of Computing program.
          </p>
          <p className="mb2">
            In the years since, I have made a body of paintings, built projects
            for the web, and helped small businesses and other creative people
            with software-related tasks through development projects and
            support.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
