import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Lectures } from './lectures.js';

if (Meteor.isServer) {
  describe('Lectures', () => {
    describe('Methods', () => {
      Lectures.remove({});
      const count = Lectures.find().count();

      it('Can add new lecture', () => {
        Meteor.call('lectures.insert', 'lectureName');
        // Counts the elements in collection.
        assert.equal(Lectures.find().count(), (count + 1));
      });
    });
  });
}
