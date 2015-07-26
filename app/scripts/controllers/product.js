'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('ProductCtrl', ($scope, $stateParams, api) => {

		let id = $stateParams.id;

		$scope.product = {};

		if (id !== 'new') {
			$scope.editMode = true;
			api.getProductsByProductId({productId: id}).then((data) => {
				$scope.product = data;
			});
		}

		$scope.save = () => {
			if ($scope.editMode) {
				api.putProductsByProductId({
					productId: id,
					body: $scope.product
				});
			} else {
				api.postProducts({body: $scope.product});
			}
		};

		$scope.del = () => {
			api.deleteProductsByProductId({ productId: id });
		};
	});