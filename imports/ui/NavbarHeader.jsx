import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { CurrentUser } from '../startup/xUser.js';

import Lecture from './Lecture.jsx';

export default class NavbarHeader extends Component {

  handleButtonPress(event) {
    // Go to the main page
    event.preventDefault();
    FlowRouter.go('/');
  }
  renderLectures() {
    return this.props.lectures.map((lecture) => (
      <Lecture key={lecture._id} lecture={lecture}/>
    ));
  }

  goToExampleClass(event) {
    // Go to /lecture/Example class
    event.preventDefault();
    const lectureName = 'Example class';
    const params = {
      lectureName,
    };
    const routeName = 'lecture';
    FlowRouter.go(routeName, params, {});

    // set the user's current site to be the correct lecture
    Meteor.call('sliderValues.updateLecture', CurrentUser.state.userID, lectureName);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <button className="invisibleButton" onClick={this.handleButtonPress}>
                <img className="img-responsive" width="180" alt="Slidd.it" src="/logo3.png" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Active lectures <span className="caret" /></a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    {this.renderLectures()}
                    <li><button className="liButton" onClick={this.goToExampleClass}>Example class</button></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// // // // // PropTypes // // // // //

NavbarHeader.propTypes = {
  lectures: PropTypes.array.isRequired,
};
