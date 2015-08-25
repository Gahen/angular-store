'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:EditProductCtrl
 * @description
 * # EditProductCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('EditProductCtrl', ($scope, $state, api, product) => {

		$scope.product = product;

		$scope.save = () => {
			api.putProductsByProductId({
				productId: $scope.product.uuid,
				body: $scope.product
			}).then(() => {
				$state.go('products.list');
			});
		};

		$scope.del = () => {
			api.deleteProductsByProductId({ productId: $scope.product.uuid }).then(() => {
				$state.go('products.list');
			});
		};

	});