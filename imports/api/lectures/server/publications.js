import { Meteor } from 'meteor/meteor';
import { Lectures } from '../lectures';

// Lectures publication, finds all cectures
Meteor.publish('lectures.all', () => {
  return Lectures.find();
});
