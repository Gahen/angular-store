'use strict';

describe('Controller: ProductCtrl', function () {

	// load the controller's module
	beforeEach(module('angularStore'));

	let ProductCtrl,
		scope,
		api,
		mockPromise,
		$rootScope,
		$controller,
		stateParams;

	beforeEach(inject(function ($injector, $q) {
		$rootScope = $injector.get('$rootScope');
		$controller = $injector.get('$controller');
		scope = $rootScope.$new();
		api = $injector.get('api');
		mockPromise = $q(resolve => {
			resolve({ uuid: 'testUuid'});
		});
		spyOn(api, 'getProductsByProductId').and.returnValue(mockPromise);
		spyOn(api, 'postProducts').and.returnValue(mockPromise);
		spyOn(api, 'putProductsByProductId').and.returnValue(mockPromise);
		spyOn(api, 'deleteProductsByProductId').and.returnValue(mockPromise);
	}));

	describe('Edit mode', () => {
		// Initialize the controller and a mock scope
		beforeEach(() => {
			stateParams = { id: 1 };
			ProductCtrl = $controller('ProductCtrl', {
				$scope: scope,
				$stateParams: stateParams,
				api: api
			});
		});

		it('should be defined', () => {
			expect(ProductCtrl).toBeDefined();
		});

		it('should have a product object', () => {
			expect(scope.product).toBeDefined();
		});

		it('should call the api method to get a single product', () => {
			expect(api.getProductsByProductId).toHaveBeenCalled();
			$rootScope.$apply();
			expect(scope.product.uuid).toBeDefined();
		});

		it('should call the api method to update a product with the state id', () => {
			$rootScope.$apply();
			scope.product.test = 'test value';
			scope.save();
			expect(api.putProductsByProductId).toHaveBeenCalledWith({ productId: stateParams.id, body: scope.product });
		});

		it('should call the api method to delete a product with the state id', () => {
			$rootScope.$apply();
			scope.product.test = 'test value';
			scope.del();
			expect(api.deleteProductsByProductId).toHaveBeenCalledWith({ productId: stateParams.id });
		});
	});

	describe('Insert mode', () => {
		// Initialize the controller and a mock scope
		beforeEach(() => {
			stateParams = { id: 'new' };
			ProductCtrl = $controller('ProductCtrl', {
				$scope: scope,
				$stateParams: stateParams,
				api: api
			});
		});

		it('should have an empty product object', () => {
			expect(scope.product).toEqual({});
		});

		it('should call the api method to create a new product', () => {
			scope.save();
			expect(api.postProducts).toHaveBeenCalledWith({ body: scope.product });
		});
	});
});