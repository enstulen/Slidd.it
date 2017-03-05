import React, { Component } from 'react';
import { mount } from 'react-mounter';
import NavbarHeader from '../NavbarHeader';
import Welcome from '../../ui/pages/welcome.jsx';


class FourOFour extends Component {
  constructor(props) {
    super(props);

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(event) {
    event.preventDefault();
    window.location = 'http://www.slidd.it';
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader />
        </div>
        <center><div id="centerBox">
          <h1><big><big>404</big></big></h1>
          <h2>Page not found</h2>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleButtonPress}>Go to main page</button>
        </div></center>
      </div>
    );
  }
}

export default FourOFour;
