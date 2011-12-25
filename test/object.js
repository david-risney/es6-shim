var expect = require('expect.js');
require('../');

describe('Object', function() {
  describe('Object.is()', function() {
    it('should compare regular objects correctly', function() {
      expect(Object.is(null, null)).to.be.ok();
      expect(Object.is(void 0, void 0)).to.be.ok();
      expect(Object.is([0], [0])).to.not.be.ok();
      expect(Object.is(5, 5)).to.be.ok();
      expect(Object.is('str', 'str')).to.be.ok();
      var obj = {a: null};
      expect(Object.is(obj, obj)).to.be.ok();
    });

    it('should compare 0 and -0 correctly', function() {
      expect(Object.is(0, -0)).to.not.be.ok();
    });

    it('should compare NaNs correctly', function() {
      expect(Object.is(NaN, NaN)).to.be.ok();
    });
  });
  
  describe('#getOwnPropertyDescriptors()', function() {
    it('should produce an array of properties', function() {
      expect(false).to.be.ok();
    });
  });
  
  describe('#getPropertyDescriptor()', function() {
    it('should produce an array of properties including inherited ones',
      function() {
      expect(false).to.be.ok();
    });
  });
  
  describe('#getPropertyNames()', function() {
    it('should produce an array of property names including inherited ones',
      function() {
      expect(false).to.be.ok();
    });
  });
});