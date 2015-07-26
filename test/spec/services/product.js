'use strict';

describe('Service: Product', function () {

  // load the service's module
  beforeEach(module('angularStoreApp'));

  // instantiate service
  let Product;
  beforeEach(inject(function (_Product_) {
    Product = _Product_;
  }));

  it('should be defined', function () {
    expect(Product).toBeDefined();
  });

});
