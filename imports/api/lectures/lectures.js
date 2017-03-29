import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Lectures = new Mongo.Collection('lectures');

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
