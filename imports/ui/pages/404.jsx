import { FlowRouter } from 'meteor/kadira:flow-router';
import React, { Component } from 'react';
import NavbarHeader from '../NavbarHeader';


class FourOFour extends Component {
  constructor(props) {
    super(props);

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(event) {
    event.preventDefault();
    FlowRouter.go('/');
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader />
        </div>
        <center><div id="centerBox">
          <img width="300" alt="høøøøøna" src="Hoonegif.gif" />
          <h1><big><big>404</big></big></h1>
          <h2>Page not found</h2>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleButtonPress}>Go to main page</button>
        </div></center>
      </div>
    );
  }
}

export default FourOFour;
