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
    if (this.props.frontPage) {
      return (
        <tr>
          <td className="left"><h4>{this.props.lecture.lectureName}</h4> </td>
          <td className="right"><button onClick={this.handleButtonPress} className="btn btn-success btn-lg">Select</button></td>
        </tr>
      );
    }
    return (
      <li><button className="liButton" onClick={this.handleButtonPress}>{this.props.lecture.lectureName}</button></li>
    );
  }
}

// // // // // PropTypes // // // // //

Lecture.defaultProps = {
  frontPage: false,
};

Lecture.propTypes = {
  frontPage: PropTypes.bool,
  lecture: PropTypes.object.isRequired,
};
