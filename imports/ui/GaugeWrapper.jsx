import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { SliderValues } from '../api/slidervalues.js';

export class GaugeWrapper extends React.Component {

    render() {
        return (
            <div>
                <Gauge
                  value={10}
                  width={400} height={320}
                  label="This is my Gauge" />
            </div>
        );
    }
}
