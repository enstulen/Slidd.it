import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Lectures } from '../../api/lectures/lectures.js';

import SliderWrapper from '../SliderWrapper';
import { CurrentUser } from '../../startup/xUser';
import NavbarHeader from '../NavbarHeader';
import GaugeWrapper from '../GaugeWrapper';
import Comment from '../components/comment';


export class App extends Component {
  constructor(props) {
    super(props);
    // Bind events
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }
  componentDidMount() {
    Meteor.subscribe('lectures');
    Meteor.call('lectures.insert', FlowRouter.getParam('lectureName'));
  }

  handleButtonPress() {
    // Find the text in textField via the React ref
    const comment = ReactDOM.findDOMNode(this.refs.textInputComment).value.trim();
    Meteor.call('comments.insert', comment, FlowRouter.getParam('lectureName'));
  }

  renderComments() {
    return this.props.comments.map((comment) => (
      <Comment key={comment._id} comment={comment} />
    ));
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader lectures={this.props.lectures} />
        </div>
        <center><div id="centerBox">
          <div>
            <h1>{FlowRouter.getParam('lectureName')}</h1>
          </div>
          <div className="gauge">
            <GaugeWrapper sliderValues={this.props.sliderValues} />
          </div>
          <div className="slider">
            <SliderWrapper />
          </div>
          <div className="comments">
            <form className="form">
              <input type="text" ref="textInputComment" className="commentInput" placeholder="Type to add new comment" />
              <button type="button" onClick={this.handleButtonPress} className="btn btn-primary btn-lg">Submit</button>
            </form>
            <ul>
              {this.renderComments()}
            </ul>
          </div>
        </div></center>
      </div>
    );
  }
}

export class Main extends Component {
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

App.propTypes = {
  sliderValues: PropTypes.array.isRequired,
  lectures: PropTypes.array.isRequired,
};

Main.propTypes = {
  content: PropTypes.element.isRequired,
};
