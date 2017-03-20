var assert = require('assert');
var calculateAvarage = require('../imports/ui/GaugeWrapper.jsx');
  describe('calculateAvarage', function() {
    it('should return the avarage of an array, or 0 if the array is empty', function() {
      assert.equal(0, calculateAvarage([]));
    });
  });
