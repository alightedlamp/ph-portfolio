import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="bg-washed-blue black ph5-l pv5-l">
        <h2>Contact</h2>
        <p>
          For general inquiries, please{' '}
          <a href="mailto:philipharrell@gmail.com">send me a message!</a>
        </p>
      </div>
    );
  }
}

export default Contact;
