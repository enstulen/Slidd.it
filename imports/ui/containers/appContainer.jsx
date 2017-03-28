import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues';
import { App } from '../../ui/pages/app';
import { Lectures } from '../../api/lectures/lectures.js';
import { Comments } from '../../api/comments/comments';

// App container
export default AppContainer = createContainer(() => {
  // Subscriptions
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');
  Meteor.subscribe('comments.all');

  // Get current lecture
  const lectureName = FlowRouter.getParam('lectureName');

  return {
    // Finds all lectures.
    lectures: Lectures.find({}).fetch(),
    // Finds all sliderValues from specific lecture.
    sliderValues: SliderValues.find({ lectureName }).fetch(),
    // Finds all comments from specific lecture sorted by the latest comment first.
    comments: Comments.find({ lectureName }, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);
