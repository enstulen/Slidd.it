import React, {Component, PropTypes} from 'react';
import Slider from 'react-rangeslider';
import { SliderValues } from '../api/slidervalues.js';


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
    console.log(this.props);

    SliderValues.insert({
        value: value
    });
  }
}
