import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import { SliderWrapper } from './SliderWrapper';
import { CurrentUser } from '../startup/xUser';
import { GaugeWrapper } from './GaugeWrapper';

import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../api/sliderValues/slidervalues.js';

class App extends React.Component{
  render(){
    return(
      <div id="centerBox">
        <div>
          <h1>😊 Slidd.it 😊</h1>
        </div>
        <div className="gauge">
          <GaugeWrapper sliderValues={this.props.sliderValues}/>
        </div>
        <div className="slider">
          <SliderWrapper />
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('sliderValues.all');
  return {
      sliderValues: SliderValues.find({}).fetch(),
  };
}, App);
