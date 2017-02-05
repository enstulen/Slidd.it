import ReactDOM from 'react-dom'
import React from 'react'
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import { SliderWrapper } from '../imports/ui/SliderWrapper';
import { CurrentUser } from '../imports/startup/xUser';
import { GaugeWrapper } from '../imports/ui/GaugeWrapper';

class Main extends React.Component{

    render(){
      return(
        <div id="centerBox">
          <div>
            <h1>😊 Slidd.it 😊</h1>
          </div>
          <div className="gauge">
            <GaugeWrapper />
          </div>
          <div className="slider">
            <SliderWrapper />
          </div>
        </div>
      )
    }
}

Meteor.startup(() => {
  CurrentUser.registerUser();
  mount(Main);
});
