'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('ProductsCtrl', function ($scope, api) {
		api.getProducts().then((data) => {
			$scope.products = data;
		});
	});