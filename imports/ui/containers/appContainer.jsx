import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues';
import { App } from '../../ui/pages/app';

export default AppContainer = createContainer(() => {
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');

  const lectureName = FlowRouter.getParam('lectureName');

  return {
    sliderValues: SliderValues.find({ lectureName }).fetch(),
  };
}, App);
