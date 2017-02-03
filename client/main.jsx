import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import ReactDOM from 'react-dom'
import React from 'react'
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import Slider from 'react-rangeslider';

class Main extends React.Component{

    render(){
      return(
        <div>
          <h1> Main component</h1>
          
        </div>
      )
    }
}

Meteor.startup(() => {
  mount(Main);
});
