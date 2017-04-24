import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Comments } from './comments.js';

if (Meteor.isServer) {
  describe('Comments', () => {
    describe('Methods', () => {
      Comments.remove({});
      const count = Comments.find().count();

      it('Can add new comment', () => {
        Meteor.call('comments.insert', 'text', 'lectureName');
        // Counts the elements in collection.
        assert.equal(Comments.find().count(), (count + 1));
      });
    });
  });
}
