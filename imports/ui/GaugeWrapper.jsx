import React, { Component, PropTypes } from 'react';
import Gauge from 'react-svg-gauge';

// Wrapper component for the gauge on the app page.
export default class GaugeWrapper extends Component {

  // Initial values:
  // value = Starting value of gauge.
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      width: 500,
      height: 320,
    };
  }
  // Calculates the avarage of array values. Rounds the number.
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
        <Gauge className="gauge" value={this.calculateAvarage(this.props.sliderValues)} width={this.state.width} height={this.state.height} label="" />
      </div>
    );
  }
}

// // // // // PropTypes // // // // //

GaugeWrapper.propTypes = {
  sliderValues: PropTypes.array.isRequired,
};
