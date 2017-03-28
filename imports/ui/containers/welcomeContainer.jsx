import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues';
import { Welcome } from '../../ui/pages/welcome';
import { Lectures } from '../../api/lectures/lectures.js';

// Welcome container
export default WelcomeContainer = createContainer(() => {
  // Subscriptions
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');

  // Get current lecture
  const lectureName = FlowRouter.getParam('lectureName');

  return {
    // Finds all lectures.
    lectures: Lectures.find({}).fetch(),
    // Finds all sliderValues from specific lecture.
    sliderValues: SliderValues.find({ lectureName }).fetch(),
  };
}, Welcome);
