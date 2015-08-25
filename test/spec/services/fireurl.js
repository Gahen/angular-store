'use strict';

describe('Service: fireUrl', function () {

  // load the service's module
  beforeEach(module('angularStoreApp'));

  // instantiate service
  var fireUrl;
  beforeEach(inject(function (_fireUrl_) {
    fireUrl = _fireUrl_;
  }));

  it('should do something', function () {
    expect(!!fireUrl).toBe(true);
  });

});
