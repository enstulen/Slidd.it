import ReactDOM from 'react-dom'
import React from 'react'
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import Slider from 'react-rangeslider';

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

class SliderWrapper extends React.Component {

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
    console.log(this.state.value)
  }
}

Meteor.startup(() => {
  mount(Main);
});
