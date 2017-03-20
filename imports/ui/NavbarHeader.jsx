import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Lectures } from '../api/lectures/lectures.js';

import Lecture from './Lecture.jsx';

export default class NavbarHeader extends Component {

  handleButtonPress(event) {
    this.event = event;
    event.preventDefault();
    FlowRouter.go('/');
  }
  renderLectures() {
    return this.props.lectures.map((lecture) => (
      <Lecture key={lecture._id} lecture={lecture} />
    ));
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand">
                <img className="img-responsive" onClick={this.handleButtonPress} width="105" alt="Slidd.it" src="logo3.png" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/" onClick={this.handleButtonPress}>Home</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Active lectures <span className="caret" /></a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    {this.renderLectures()}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
