import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { SliderValues } from '../../api/sliderValues/slidervalues';
import { App } from '../../ui/pages/app';
import { Lectures } from '../../api/lectures/lectures.js';
import { Comments } from '../../api/comments/comments';

// App container
export default createContainer(() => {
  // Subscriptions
  Meteor.subscribe('sliderValues.all');
  Meteor.subscribe('lectures.all');
  Meteor.subscribe('comments.all');

  // Get current lecture
  const lectureName = FlowRouter.getParam('lectureName');

  // add the lecture to the lecture collection
  Meteor.call('lectures.insert', lectureName);

  // Places all active lectures in the array "activeLectures"
  const activeLectures = [];
  const namesOfActiveLectures = [];
  SliderValues.find({}).fetch().forEach(function(element) {
    const lecture = Lectures.find({ lectureName: element.lectureName }).fetch()[0];
    if (lecture != null) {
      if (namesOfActiveLectures.indexOf(lecture.lectureName) < 0) {
        activeLectures.push(lecture);
        namesOfActiveLectures.push(lecture.lectureName);
      }
    }
  });

  return {
    // Finds all lectures.
    lectures: Lectures.find({}).fetch(),
    // Sends all active lectures to the App component.
    activeLectures,
    // Finds all sliderValues from specific lecture.
    sliderValues: SliderValues.find({ lectureName }).fetch(),
    // Finds all comments from specific lecture sorted by the latest comment first.
    comments: Comments.find({ lectureName }, { sort: { createdAt: -1 } }).fetch(),
  };
}, App);
