import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import SliderWrapper from '../SliderWrapper';
import { CurrentUser } from '../../startup/xUser';
import NavbarHeader from '../NavbarHeader';
import GaugeWrapper from '../GaugeWrapper';
import Comment from '../components/comment';

// App component for showing current lecture with slider, comment section and gauge.
export class App extends Component {
  constructor(props) {
    super(props);
    // Bind events
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyDown(event) {
    // Click the submit-button if enter key is pressed. (Enter key is key number 13)
    if (event.keyCode === 13) {
      // Prevent default behaviour.
      event.preventDefault();
      this.handleButtonPress();
    }
  }
  handleSubmit(event) {
    // Prevent default behaviour.
    event.preventDefault();
    this.handleButtonPress();
  }

  handleButtonPress() {
    // Find the text in textField via the React ref
    const comment = ReactDOM.findDOMNode(this.refs.textInputComment).value.trim();
    // Insert Comment
    Meteor.call('comments.insert', comment, FlowRouter.getParam('lectureName'));
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInputComment).value = '';
  }

  renderComments() {
    // Render all comments.
    return this.props.comments.map((comment) => (
      <Comment key={comment._id} comment={comment} createdAt={comment.createdAt} />
    ));
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader lectures={this.props.activeLectures} />
        </div>
        <center><div id="centerBox">
          <div>
            <h1>{FlowRouter.getParam('lectureName')}</h1>
          </div>
          <div className="gauge">
            <GaugeWrapper sliderValues={this.props.sliderValues} />
          </div>
          <div id="gaugeText">
            <table id="gaugeTable">
              <tbody>
                <td className="gaugeLeftText">Slow</td>
                <td className="gaugeMiddleText"><h2>Average</h2></td>
                <td className="gaugeRightText">Fast</td>
              </tbody>
            </table>
          </div>
          <div className="slider">
            <SliderWrapper />
          </div>
          <div id="sliderText">
            <table id="sliderTable">
              <tbody>
                <td className="sliderLeftText">Slow</td>
                <td className="sliderMiddleText">Slide to indicate lecture-speed</td>
                <td className="sliderRightText">Fast</td>
              </tbody>
            </table>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">Comments</div>
            <div className="input-group">
              <input type="text" ref="textInputComment" className="form-control" placeholder="Type to add new comment" onKeyDown={this.handleKeyDown} onSubmit={this.handleSubmit} />
              <span className="input-group-btn">
                <button onClick={this.handleButtonPress} className="btn btn-default" type="button">Submit</button>
              </span>
            </div>
            <div className="comments">
              <table id="mytable" className="table table-striped">
                <tbody>
                  {this.renderComments()}
                </tbody>
              </table>
            </div>
          </div>


        </div></center>
      </div>
    );
  }
}

export class Main extends Component {
  // Register user when the component is mounted.
  componentWillMount() {
    CurrentUser.registerUser(FlowRouter.getParam('lectureName'));
  }

  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

// // // // // PropTypes // // // // //

App.propTypes = {
  sliderValues: PropTypes.array.isRequired,
  lectures: PropTypes.array.isRequired,
  activeLectures: PropTypes.array.isRequired,
};

Main.propTypes = {
  content: PropTypes.element.isRequired,
};

NavbarHeader.propTypes = {
  lectures: PropTypes.array.isRequired,
};
