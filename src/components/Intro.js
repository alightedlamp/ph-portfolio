import React, { Component } from 'react';
import { INTROS } from '../helpers';

class Intro extends Component {
  constructor() {
    super();

    this.state = {
      introText: ''
    };

    this.chooseIntroText = this.chooseIntroText.bind(this);
  }
  chooseIntroText() {
    const randIdx = Math.floor(Math.random() * INTROS.length);
    const introText = INTROS[randIdx];
    this.setState({ introText });
  }
  componentDidMount() {
    this.chooseIntroText();
  }
  render() {
    return <p className="intro">{this.state.introText}</p>;
  }
}

export default Intro;
