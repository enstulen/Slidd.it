import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { SliderValues } from '../api/sliderValues/slidervalues.js';
import { createContainer } from 'meteor/react-meteor-data';


export class GaugeWrapper extends Component {

    constructor(props){
      super(props);
      this.state = {
        value: 0,
        width: 500,
        height: 320
      };
    }

    render() {
        return (
            <div>
                <Gauge
                  value={this.calculateAvarage(this.props.sliderValues)}
                  width={this.state.width}
                  height={this.state.height}
                  label="" />
            </div>

        );
    }
    calculateAvarage(array){
      if (array.length > 0) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i].value;
        }
        var avarage = total/array.length;
        return Math.round(avarage);
      }
      return 0;

    }
}
