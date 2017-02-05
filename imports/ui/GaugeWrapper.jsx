import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { SliderValues } from '../api/slidervalues.js';

export class GaugeWrapper extends React.Component {

    render() {
        this.state = {
          value: 0,
          width: 500,
          height: 320
        }
        return (
            <div>
                <Gauge
                  value={this.state.value}
                  width={this.state.width}
                  height={this.state.height}
                  label="" />
            </div>

        );
    }
}
