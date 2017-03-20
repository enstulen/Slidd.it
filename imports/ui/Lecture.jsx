import { FlowRouter } from 'meteor/kadira:flow-router';

import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { CurrentUser } from '../startup/xUser.js';

// Task component - represents a single todo item
export default class Lecture extends Component {
  constructor(props) {
    super(props);
    // Bind events
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(event) {
    event.preventDefault();
    const lectureName = this.props.lecture.lectureName;
    const params = {
      lectureName,
    };
    const routeName = 'lecture';
    FlowRouter.go(routeName, params, {});
    Meteor.call('sliderValues.updateLecture', CurrentUser.state.userID, this.props.lecture.lectureName);
  }

  render() {
    return (
      <li><button className="liButton" onClick={this.handleButtonPress}>{this.props.lecture.lectureName}</button></li>
    );
  }
}

Lecture.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  lecture: PropTypes.object.isRequired,
};
