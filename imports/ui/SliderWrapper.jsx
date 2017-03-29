import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import { Meteor } from 'meteor/meteor';

import { CurrentUser } from '../startup/xUser';

// Wrapper component for the slider on the app page.
export default class SliderWrapper extends Component {

  // Initial values:
  // value = Value for the slider. Starts in the middle (50).
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }
  // Handle of slide events
  handleSlide(value) {
    // Set the component state to update the value
    this.setState({
      value,
    });
    // Update value on the server
    Meteor.call('sliderValues.update', CurrentUser.state.userID, this.state.value);
  }
  render() {
    const value = this.state.value;
    return (
      <div>
        <div>
          <Slider value={value} onChange={sliderValue => this.handleSlide(sliderValue)} />
        </div>
      </div>
    );
  }
}
