import { Meteor } from 'meteor/meteor';
import { SliderValues } from '../slidervalues';

// SliderValues publication, finds all comments
Meteor.publish('sliderValues.all', () => {
  return SliderValues.find();
});
