'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
	beforeEach(module('angularStore'));

	var ProductsCtrl,
	  scope,
		api,
		mockPromise,
		$rootScope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $injector, $q) {
		$rootScope = $injector.get('$rootScope');
	  scope = $rootScope.$new();
		api = $injector.get('api');
		mockPromise = $q(resolve => {
			resolve([{ uuid: 'testUuid'}]);
		});
		spyOn(api, 'getProducts').and.returnValue(mockPromise);
	  ProductsCtrl = $controller('ProductsCtrl', {
	    $scope: scope
	  });
	}));

	it('should call the api method to get a list of products', () => {
		expect(api.getProducts).toHaveBeenCalled();
		$rootScope.$apply();
		expect(Array.isArray(scope.products)).toBe(true);
		expect(scope.products.length).toBe(1);
		expect(scope.products[0].uuid).toBe('testUuid');
	});
});
