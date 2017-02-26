import { Meteor } from 'meteor/meteor';
import { Lectures } from '../lectures.js';

Meteor.publish('lectures.all', () => {
  return Lectures.find();
});
