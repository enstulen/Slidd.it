import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SliderValues = new Mongo.Collection("sliderValues");

Meteor.methods({
  'sliderValues.insert'(userID, value, lectureName) {
    check(userID, String);
    check(value, Number);
    SliderValues.insert({
      userID: userID,
      value: value,
      lectureName: lectureName,
    });
  },
  'sliderValues.update'(userID, value) {
    check(value, Number);
    check(value, Number);
    SliderValues.update({userID:userID}, {
        $set: {
          value: value
        },
      });
  },
});
