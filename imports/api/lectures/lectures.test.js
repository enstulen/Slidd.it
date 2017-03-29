import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Lectures } from './lectures.js';

if (Meteor.isServer) {
  describe('Lectures', () => {
    describe('Methods', () => {
      const count = Lectures.find().count();

      beforeEach(() => {
        Lectures.remove({});
        Lectures.insert('lectureName');
      });
      it('Can add new lecture', () => {
        // Verify that the method does what we expected
        assert.equal(Lectures.find().count(), (count + 1));
      });
    });
  });
}
