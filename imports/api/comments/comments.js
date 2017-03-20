import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Comments = new Mongo.Collection('comments');

Meteor.methods({
  'comments.insert'(comment, lectureName) {
    check(comment, String);
    check(lectureName, String);
    Comments.insert({
      createdAt: new Date(),
      comment,
      lectureName,
    });
  },
});
