import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SliderValues = new Mongo.Collection('sliderValues');

Meteor.methods({
  'sliderValues.insert'(userID, value, lectureName, createdAt) {
    check(userID, String);
    check(value, Number);
    check(lectureName, String);
    check(createdAt, Date);
    SliderValues.insert({
      userID,
      value,
      lectureName,
      createdAt,
    });
  },
  'sliderValues.update'(userID, value) {
    check(value, Number);
    check(value, Number);
    SliderValues.update({ userID }, {
      $set: {
        value,
      },
    });
  },
  'sliderValues.updateDate'(userID, date) {
    check(date, Date);
    SliderValues.update({ userID }, {
      $set: {
        createdAt: date,
      },
    });
  },
});
