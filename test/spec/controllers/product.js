'use strict';

describe('Controller: ProductCtrl', function () {

  // load the controller's module
  beforeEach(module('angularStoreApp'));

  let ProductCtrl,
      scope,
      routeParams;
  class Product {}

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    routeParams = {};
    ProductCtrl = $controller('angularStoreApp.ProductCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      Product: Product
    });
  }));

  it('should contain a product object', function () {
    expect(scope.product).toBeDefined();
    expect(scope.product instanceof Product).toBe(true);
  });
});
