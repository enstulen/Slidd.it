import { Meteor } from 'meteor/meteor';
import { SliderValues } from '../slidervalues.js';

Meteor.publish('sliderValues.all', () => {
  return SliderValues.find();
});
