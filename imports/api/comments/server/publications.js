import { Meteor } from 'meteor/meteor';
import { Comments } from '../comments';

Meteor.publish('comments.all', () => {
  return Comments.find();
});
