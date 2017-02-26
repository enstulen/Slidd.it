import React, {Component, PropTypes} from 'react';
import Slider from 'react-rangeslider';
import { createContainer } from 'meteor/react-meteor-data';

import { SliderValues } from '../api/sliderValues/slidervalues.js';
import { CurrentUser } from '../startup/xUser';


export class SliderWrapper extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 50,
    };
  }
  render() {
    let value = this.state.value;
    return (
      <div>
        <div>
          <Slider
            value={value}
            onChange={(value) => this.handleSlide(value)}
            />
        </div>
        <div id="valueText"><p>Value: {value} {Slider.labels}</p></div>
      </div>
    );
  }
  handleSlide(value){
    this.setState({
      value,
    });
    Meteor.call('sliderValues.update', CurrentUser.state.userID, this.state.value);
  }
}
