import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Welcome } from '../../ui/pages/welcome';
import { Lectures } from '../../api/lectures/lectures.js';
import { SliderValues } from '../../api/sliderValues/slidervalues.js';

// Welcome container
export default WelcomeContainer = createContainer(() => {
  // Subscriptions
  Meteor.subscribe('lectures.all');
  Meteor.subscribe('sliderValues.all');

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
    // Sends all active lectures to the Welcome component.
    lectures: activeLectures,
  };
}, Welcome);
