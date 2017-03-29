import { FlowRouter } from 'meteor/kadira:flow-router';
import React, { Component, PropTypes } from 'react';
import NavbarHeader from '../NavbarHeader';

// 404 component for showing the 404 site
export class FourOFour extends Component {
  handleButtonPress(event) {
    // Go to the main page
    event.preventDefault();
    FlowRouter.go('/');
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader lectures={this.props.lectures} />
        </div>
        <center><div id="centerBox">
          <img width="300" alt="404Chicken" src="/Hoonegif.gif" />
          <h1><big><big>404</big></big></h1>
          <h2>Page not found</h2>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleButtonPress}>Go to main page</button>
        </div></center>
      </div>
    );
  }
}

export class FourOFourMain extends Component {
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

// // // // // PropTypes // // // // //

FourOFourMain.propTypes = {
  content: PropTypes.element.isRequired,
};

NavbarHeader.propTypes = {
    lectures: PropTypes.array.isRequired,
};
