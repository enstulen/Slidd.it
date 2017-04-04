import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import NavbarHeader from '../NavbarHeader';
import { CurrentUser } from '../../startup/xUser';
import Lecture from '../Lecture';
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

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    // Go to lecture page
    const params = {
      lectureName,
    };
    const routeName = 'lecture';
    FlowRouter.go(routeName, params, {});
    Meteor.call('sliderValues.updateLecture', CurrentUser.state.userID, lectureName);
  }

  renderLectures() {
    return this.props.lectures.map((lecture) => (
      <Lecture key={lecture._id} lecture={lecture} frontPage />
    ));
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader lectures={this.props.lectures} />
        </div>
        <center><div id="centerBox">
          <img className="img-responsive" width="50%" alt="Slidd.it" src="/logo3.png" />
          <div className="frontpage-text">
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but</p>
          </div>
          <div className="enter-subject">
            <div className="form-group">
              <input type="text" className="form-control" id="frontpage-form" ref="textInput" placeholder="Enter subject" onKeyDown={this.handleKeyDown} />
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg" id="front-page-button" onClick={this.handleButtonPress}>Submit</button>
            </div>
          </div>
          <div className="lectures-container">
            <h3 className="lectures-header"> Active lectures </h3>
            <table id="lectures-table" className="table table-hover">
              <tbody>
                {this.renderLectures()}
              </tbody>
            </table>
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

Welcome.propTypes = {
  lectures: PropTypes.array.isRequired,
};

WelcomeMain.propTypes = {
  content: PropTypes.element.isRequired,
};

NavbarHeader.propTypes = {
  lectures: PropTypes.array.isRequired,
};
