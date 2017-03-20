import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Comment extends Component {
  render() {
    return (
      <li className="commentList">{this.props.comment.comment}</li>
    );
  }
}
