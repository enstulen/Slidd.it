import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';
import { Lectures } from '../../api/lectures/lectures.js';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  handleButtonPress(event) {
    event.preventDefault();
    // Find the text in textField via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    //Insert lecture in database
    Meteor.call("lectures.insert", text)
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    //Go to app page
    FlowRouter.go('/app');

  }

  render(){
    return(
      <center><div id="centerBox">
        <h1>Hallaballa</h1>
        <div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref="textInput"
                placeholder="Enter subject"/>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.handleButtonPress.bind(this)}>Submit</button>
            </div>
        </div>
      </div></center>
    )
  }
}
