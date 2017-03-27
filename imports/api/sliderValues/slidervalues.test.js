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

      beforeEach(() => {
        resetDatabase();
        SliderValues.remove({});
      });
      it('Can insert slidervalue', () => {
        // Verify that the method does what we expected. 
        SliderValues.insert('user1', 40, 'lectureName', new Date());
        assert.equal(SliderValues.find().count(), (count + 1));
      });

      it('Can update slidervalue', () => {
        SliderValues.insert('user2', 52, 'lectureName', new Date());
        SliderValues.update('userID': 'user2', 47);
        var result = SliderValues.filter(function (obj) {
          return obj.userID === 'user2';
        });

        assert.equal(result[1], 47);
      });
    });
  });
}
  