import React, { Component, PropTypes } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import SliderWrapper from '../SliderWrapper';
import { CurrentUser } from '../../startup/xUser';
import NavbarHeader from '../NavbarHeader'
import GaugeWrapper from '../GaugeWrapper';


export class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarHeader lectures={this.props.lectures} />
        </div>
        <center><div id="centerBox">
          <div>
            <h1>{FlowRouter.getParam('lectureName')}</h1>
          </div>
          <div className="gauge">
            <GaugeWrapper sliderValues={this.props.sliderValues} />
          </div>
          <div className="slider">
            <SliderWrapper />
          </div>
        </div></center>
      </div>
    );
  }
}

export class Main extends Component {
  componentWillMount() {
    CurrentUser.registerUser(FlowRouter.getParam('lectureName'));
  }
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

App.propTypes = {
  sliderValues: PropTypes.array.isRequired,
};

Main.propTypes = {
  content: PropTypes.element.isRequired,
};

NavbarHeader.propTypes = {
    lectures: PropTypes.array.isRequired,
};
