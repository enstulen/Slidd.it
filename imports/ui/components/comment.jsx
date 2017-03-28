import React, { Component, PropTypes } from 'react';

// Comment component - represents a single comment item
export default class Comment extends Component {
  render() {
    return (
      <li className="commentList">{this.props.comment.comment}</li>
    );
  }
}
