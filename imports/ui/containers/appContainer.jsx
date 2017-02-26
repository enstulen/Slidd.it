import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues.js';
import { App } from '../../ui/pages/app.jsx';

export default AppContainer = createContainer(() => {
  const sliderValuesHandle = Meteor.subscribe('sliderValues.all');
  const lecturesHandle = Meteor.subscribe('lectures.all');
  return {
      sliderValues: SliderValues.find({}).fetch(),
  };
}, App);
