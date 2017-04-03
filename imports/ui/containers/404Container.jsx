import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FourOFour } from '../../ui/pages/404';
import { Lectures } from '../../api/lectures/lectures.js';
import { SliderValues } from '../../api/sliderValues/slidervalues.js';

export default FourOFourContainer = createContainer(() => {
  // Subscriptions
  Meteor.subscribe('lectures.all');
  Meteor.subscribe('sliderValues.all');

  // Places all active lectures in the array "activeLectures"
  const activeLectures = [];
  const namesOfActiveLectures = [];
  SliderValues.find({}).fetch().forEach(function(element) {
    const lecture = Lectures.find({ lectureName: element.lectureName }).fetch()[0];
    if (namesOfActiveLectures.indexOf(lecture.lectureName) < 0) {
      activeLectures.push(lecture);
      namesOfActiveLectures.push(lecture.lectureName);
    }
  });

  return {
    // Sends all active lectures to the Welcome component.
    lectures: activeLectures,
  };
}, FourOFour);
