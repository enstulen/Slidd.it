import React, {Component, PropTypes} from 'react';
import Slider from 'react-rangeslider';
import { SliderValues } from '../api/slidervalues.js';
import { CurrentUser } from '../startup/xUser';


export class SliderWrapper extends React.Component {

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
    this.updateSliderValue(this.state.value);
    console.log(this.state.value)
  }

  updateSliderValue(value){
    console.log(CurrentUser.state.userID);
    var doc = SliderValues.findOne({userID:CurrentUser.state.userID});
    SliderValues.update({_id:doc._id}, {$set:{
        value: this.state.value,
    }});
  }
}
