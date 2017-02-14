import ReactDOM from 'react-dom'
import React from 'react'
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

import { SliderWrapper } from '../imports/ui/SliderWrapper';

class Main extends React.Component{
    render(){
      return(
        <div id="centerBox">
          <div>
            <h1>😊 Slidd.it 😊</h1>
          </div>
          <div className="slider">
            <SliderWrapper />
          </div>
        </div>
      )
    }
}

Meteor.startup(() => {
  mount(Main);
});
