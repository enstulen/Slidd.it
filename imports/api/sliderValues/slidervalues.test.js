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
        // Verify that the method does what we expected.
        resetDatabase();
        SliderValues.remove({});
        SliderValues.insert('user1', 40, 'lectureName', new Date());
        assert.equal(SliderValues.find().count(), (count + 1));
      });

      it('Can update slidervalue', () => {
        resetDatabase();
        SliderValues.remove({});
        SliderValues.insert('user2', 52, 'lectureName', new Date());
        //SliderValues.update('userID': 'user2', 'value': 47);
        /* Det er slidervalues.update som ikke fungerer.
        Jeg får 2 errors, usikker på hvilken som egentlig skaper problemet.
        Enten oppdaterer vi funksjonen på feil måte (må inkludere en modifier), 
        eller så skjer det noe funky fordi vi tester asynkront. 
        
        Exception in callback of async function: TypeError: callback is not a function        
        Error: Invalid modifier. Modifier must be an object.
        
        jeg har sittet med denne i 2 timer nå, så sender den videre(sorry)    */
        SliderValues.update('user2', 47);
        var result = SliderValues.filter(function (obj) {
          return obj.userID === 'user2';
        });

        assert.equal(result[1], 47);
      });
    });
  });
}
