import { FlowRouter } from 'meteor/kadira:flow-router';

import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { CurrentUser } from '../startup/xUser.js';

export default class Lecture extends Component {
  constructor(props) {
    super(props);
    // Bind events
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(event) {
    // Go to /lecture/<lectureName>
    event.preventDefault();
    const lectureName = this.props.lecture.lectureName;
    const params = {
      lectureName,
    };
    const routeName = 'lecture';
    FlowRouter.go(routeName, params, {});

    // set the user's current site to be the correct lecture
    Meteor.call('sliderValues.updateLecture', CurrentUser.state.userID, this.props.lecture.lectureName);
  }

  render() {
    return (
      <li><button className="liButton" onClick={this.handleButtonPress}>{this.props.lecture.lectureName}</button></li>
    );
  }
}

// // // // // PropTypes // // // // //

Lecture.propTypes = {
  lecture: PropTypes.object.isRequired,
};
