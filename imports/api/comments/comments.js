import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// Comments collection
export const Comments = new Mongo.Collection('comments');

// // // // // Methods // // // // //

// Comments insert method.
// comment = The commment to be inserted.
// lectureName = Which lecture the comment belongs to.
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
