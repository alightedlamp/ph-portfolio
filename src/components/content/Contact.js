import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="bg-washed-blue black ph5 pv5 center">
        <div className="content">
          <h2 class="f5 ttu mb3">Contact</h2>
          <p className="mb2">
            For general inquiries, please{' '}
            <a href="mailto:philipharrell@gmail.com">send me a message!</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;