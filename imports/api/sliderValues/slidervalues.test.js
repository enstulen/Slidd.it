import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { SliderValues } from './slidervalues.js';


if (Meteor.isServer) {
  describe('SliderValues', () => {
    describe('Methods', () => {
      resetDatabase();
      SliderValues.remove({});
      // The database should be empty while we do this right?
      const count = SliderValues.find().count();

      it('Can insert slidervalue', () => {
        // Inserts an user, currently values are not set for unknown reason.
        SliderValues.insert({ _id: 'user2' }, { $set: { value: 52, lectureName: 'lectureName', createdAt: new Date() } });
        assert.equal(SliderValues.find().count(), (count + 1));
      });

      it('Can update slidervalue', () => {
        SliderValues.update({ _id: 'user2' }, { $set: { value: 47 } });
        // Returns all users in database, currently only one. Returns as an array,
        // so we choose the first and only one
        const result = SliderValues.find().fetch()[0];
        assert.equal(result.value, 47);
      });
    });
  });
}
