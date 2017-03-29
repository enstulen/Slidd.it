import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FourOFour } from '../../ui/pages/404';
import { Lectures } from '../../api/lectures/lectures.js';

export default FourOFourContainer = createContainer(() => {
  Meteor.subscribe('lectures.all');

  return {
    lectures: Lectures.find({}).fetch(),
  };
}, FourOFour);
