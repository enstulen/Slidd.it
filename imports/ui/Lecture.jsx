import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Lecture extends Component {
  render() {
    return (
      <li><a href={'/lecture/' + this.props.lecture.lectureName}>{this.props.lecture.lectureName}</a></li>
    );
  }
}

Lecture.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  lecture: PropTypes.object.isRequired,
};
