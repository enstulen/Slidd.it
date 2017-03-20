import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { SliderValues } from './slidervalues.js';

if (Meteor.isServer) {
  describe('SliderValues', () => {
    describe('Methods', () => {
      const count = SliderValues.find().count();
      const values = SliderValues;

      beforeEach(() => {
        SliderValues.insert('userID', 40, 'lectureName', new Date());
      });
      it('Can insert slidervalue', () => {
        // Verify that the method does what we expected
        assert.equal(SliderValues.find().count(), (count + 1));
      });

      it('Can update slidervalue', () => {
        assert.equal(SliderValues.length, values.length + 1);
      });
    });
  });
}
