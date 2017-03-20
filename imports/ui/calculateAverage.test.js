import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { GaugeWrapper } from './GaugeWrapper.jsx';

if (Meteor.isServer) {
  describe('Calculate average', () => {
    describe('methods', () => {
      it('can calculate average', () => {
        assert.equal(0, GaugeWrapper.calculateAvarage([0]));
      });
    });
  });
}
