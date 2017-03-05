import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import { Meteor } from 'meteor/meteor';

import { CurrentUser } from '../startup/xUser';

export default class SliderWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }
  handleSlide(value) {
    this.setState({
      value,
    });
    Meteor.call('sliderValues.update', CurrentUser.state.userID, this.state.value);
  }
  render() {
    const value = this.state.value;
    return (
      <div>
        <div>
          <Slider value={value} onChange={sliderValue => this.handleSlide(sliderValue)} />
        </div>
        <div id="valueText"><p>Value: {value} {Slider.labels}</p></div>
      </div>
    );
  }
}
