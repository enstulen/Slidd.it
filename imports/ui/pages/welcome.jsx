import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import NavbarHeader from '../NavbarHeader';

// Welcome component for showing welcome page.
export class Welcome extends Component {

  constructor(props) {
    super(props);
    // Bind events
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    // Click the submit-button if enter key is pressed. (Enter key is key number 13)
    if (event.keyCode === 13) {
      this.handleButtonPress();
    }
  }

  handleButtonPress() {
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
          <NavbarHeader lectures={this.props.lectures} />
        </div>
        <center><div id="centerBox">
          <h1>Slidd.it</h1>
          <div>
            <div className="form-group">
              <input type="text" className="form-control" ref="textInput" placeholder="Enter subject" onKeyDown={this.handleKeyDown} />
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

export class WelcomeMain extends Component {
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

// // // // // PropTypes // // // // //

WelcomeMain.propTypes = {
  content: PropTypes.element.isRequired,
};

NavbarHeader.propTypes = {
  lectures: PropTypes.array.isRequired,
};
