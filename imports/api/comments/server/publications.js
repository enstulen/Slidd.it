import { Meteor } from 'meteor/meteor';
import { Comments } from '../comments';

// Comments publication, finds all comments
Meteor.publish('comments.all', () => {
  return Comments.find();
});
