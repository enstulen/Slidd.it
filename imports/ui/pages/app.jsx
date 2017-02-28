import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import { SliderWrapper } from '../SliderWrapper';
import { CurrentUser } from '../../startup/xUser';
import { GaugeWrapper } from '../GaugeWrapper';
import { NavbarHeader } from '../NavbarHeader'


import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues.js';

export class App extends Component{
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <center><div id="centerBox">
        <div className="navbar">
          <NavbarHeader />
        </div>
        <div>
          <h1>{FlowRouter.getParam("lectureName")}</h1>
        </div>
        <div className="gauge">
          <GaugeWrapper sliderValues={this.props.sliderValues}/>
        </div>
        <div className="slider">
          <SliderWrapper />
        </div>
      </div></center>
    )
  }
}

export class Main extends Component{
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    CurrentUser.registerUser(FlowRouter.getParam("lectureName"));
  }
  render(){
    return(
      <div>
        {this.props.content}
      </div>
    )
  }
}
