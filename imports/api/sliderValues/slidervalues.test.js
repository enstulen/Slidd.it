import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { SliderValues } from './slidervalues.js';


if (Meteor.isServer) {
  describe('SliderValues', () => {
    describe('Methods', () => {
      // Empties database
      resetDatabase();
      SliderValues.remove({});

      // Sets values to be tested
      const count = SliderValues.find().count();
      const userName = 'user2';
      const lectureName = 'lectureName';

      it('Can insert sliderValue', () => {
        Meteor.call('sliderValues.insert', userName, 52, lectureName, new Date());
        // Returns a collection
        const result = SliderValues.find().fetch()[0];

        // tests if the database contains 1 element with the same values we sent in
        assert.equal(SliderValues.find().count(), (count + 1));
        assert.equal(result.userID, userName);
        assert.equal(result.value, 52);
        assert.equal(result.lectureName, lectureName);
      });

      it('Can update sliderValue', () => {
        Meteor.call('sliderValues.update', userName, 47);

        const result = SliderValues.find().fetch()[0];

        // Tests that only the value we updated got updated
        assert.equal(result.userID, userName);
        assert.equal(result.value, 47);
        assert.equal(SliderValues.find().count(), (count + 1));
        assert.equal(result.lectureName, 'lectureName');
      });
    });
  });
}
