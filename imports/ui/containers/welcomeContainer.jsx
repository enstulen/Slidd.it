import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues';
import { Welcome } from '../../ui/pages/welcome';
import { Lectures } from '../../api/lectures/lectures.js';

export default WelcomeContainer = createContainer(() => {
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');

  const lectureName = FlowRouter.getParam('lectureName');

  return {
    lectures: Lectures.find({}).fetch(),
    sliderValues: SliderValues.find({ lectureName }).fetch(),
  };
}, Welcome);
