import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import NavbarHeader from '../NavbarHeader';


export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress(event) {
    event.preventDefault();
    // Find the text in textField via the React ref
    const lectureName = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    // Insert lecture in database
    Meteor.call('lectures.insert', lectureName);
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    // Go to lecture page
    const params = {
      lectureName,
    };
    const routeName = 'lecture';
    FlowRouter.go(routeName, params, {});
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader />
        </div>
        <center><div id="centerBox">
          <h1>Slidd.it</h1>
          <div>
            <div className="form-group">
              <input type="text" className="form-control" ref="textInput" placeholder="Enter subject" />
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.handleButtonPress}>Submit</button>
            </div>
          </div>
        </div></center>
      </div>
    );
  }
}
