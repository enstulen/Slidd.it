import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Welcome } from '../../ui/pages/welcome';
import { Lectures } from '../../api/lectures/lectures.js';

export default WelcomeContainer = createContainer(() => {
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');

  return {
    lectures: Lectures.find({}).fetch(),
  };
}, Welcome);
