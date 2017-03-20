import React, { Component, PropTypes } from 'react';
import Gauge from 'react-svg-gauge';

export default class GaugeWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      width: 500,
      height: 320,
    };
  }
  calculateAvarage(array) {
    if (array.length > 0) {
      let total = 0;
      for (let i = 0; i < array.length; i += 1) {
        total += array[i].value;
      }
      const average = total / array.length;
      return Math.round(average);
    }
    return 0;
  }

  render() {
    return (
      <div>
        <Gauge value={this.calculateAvarage(this.props.sliderValues)} width={this.state.width} height={this.state.height} label="" />
      </div>
    );
  }
}

GaugeWrapper.propTypes = {
  sliderValues: PropTypes.array.isRequired,
};
