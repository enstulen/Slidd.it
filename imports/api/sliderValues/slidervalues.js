import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// SliderValues collection
export const SliderValues = new Mongo.Collection('sliderValues');

// // // // // Methods \\ \\ \\ \\ \\ \\

// sliderValues insert method.
// userID = Unique ID for each user.
// value = Value indicating the speed of the lecture.
// lectureName = Name of the lecture.
// createdAt = The date when the sliderValue is inserted.
Meteor.methods({
  'sliderValues.insert'(userID, value, lectureName, createdAt) {
    check(userID, String);
    check(value, Number);
    check(lectureName, String);
    check(createdAt, Date);
    const doc = SliderValues.findOne({ userID });
    if (!doc) {
      SliderValues.insert({
        userID,
        value,
        lectureName,
        createdAt,
      });
    }

  },
  // sliderValues update method. Updates the speed of the lecture for a certain userID.
  // userID = Unique ID for each user.
  // value = Value indicating the speed of the lecture.
  'sliderValues.update'(userID, value) {
    check(value, Number);
    check(userID, String);
    SliderValues.update({ userID }, {
      $set: {
        value,
      },
    });
  },
  // sliderValues update method. Updates the creation date for a certain userID.
  // userID = Unique ID for each user.
  // date = Date when sliderValue is updated.
  'sliderValues.updateDate'(userID, date) {
    check(date, Date);
    SliderValues.update({ userID }, {
      $set: {
        createdAt: date,
      },
    });
  },
  // sliderValues update method. Updates the lectureName for a certain userID.
  // userID = Unique ID for each user.
  // lectureName = Name of the lecture.
  'sliderValues.updateLecture'(userID, lectureName) {
    check(userID, String);
    check(lectureName, String);
    SliderValues.update({ userID }, {
      $set: {
        lectureName,
      },
    });
  },
});
