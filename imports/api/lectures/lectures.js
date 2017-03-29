import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// Lectures collection
export const Lectures = new Mongo.Collection('lectures');

// // // // // Methods // // // // //

// Lectures insert method.
// lectureName = Which lecture that should be inserted. Comes from the welcome page's textField.
Meteor.methods({
  'lectures.insert'(lectureName) {
    check(lectureName, String);
    const doc = Lectures.findOne({ lectureName });
    if (!doc) {
      console.log(doc);
      Lectures.insert({
        lectureName,
      });
    }
  },
});
