import React, { Component, PropTypes } from 'react';

// Comment component - represents a single comment item
export default class Comment extends Component {
  render() {
    return (
      <tr>
        <td className="right">{this.props.comment.comment} </td>
        <td className="left"> {this.props.createdAt.getHours()}:{this.props.createdAt.getMinutes()} &nbsp;&nbsp;&nbsp;{this.props.createdAt.toLocaleDateString()} </td>
      </tr>
    );
  }
}

// // // // // PropTypes // // // // //

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};
