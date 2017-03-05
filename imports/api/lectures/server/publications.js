import { Meteor } from 'meteor/meteor';
import { Lectures } from '../lectures';

Meteor.publish('lectures.all', () => {
  return Lectures.find();
});
