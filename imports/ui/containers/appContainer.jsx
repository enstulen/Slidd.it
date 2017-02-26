import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues.js';
import { App } from '../../ui/pages/app.jsx';

export default AppContainer = createContainer(() => {
  const sliderValuesHandle = Meteor.subscribe('sliderValues.all');
  const lecturesHandle = Meteor.subscribe('lectures.all');

  var lectureName = FlowRouter.getParam("lectureName")
  return {
      sliderValues: SliderValues.find({lectureName: lectureName}).fetch(),
  };
}, App);
