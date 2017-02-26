import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Lectures = new Mongo.Collection("lectures");

Meteor.methods({
  'lectures.insert'(lectureID) {
      Lectures.insert({
        lectureName: lectureID,
      });
  },
});
