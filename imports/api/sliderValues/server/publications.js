import { Meteor } from 'meteor/meteor';
import { SliderValues } from '../slidervalues';

Meteor.publish('sliderValues.all', () => {
  return SliderValues.find();
});
