import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues';
import { FourOFour } from '../../ui/pages/404';
import { Lectures } from '../../api/lectures/lectures.js';

export default FourOFourContainer = createContainer(() => {
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');

  const lectureName = FlowRouter.getParam('lectureName');

  return {
    lectures: Lectures.find({}).fetch(),
    sliderValues: SliderValues.find({ lectureName }).fetch(),
  };
}, FourOFour);
