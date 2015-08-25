'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:ProductsListCtrl
 * @description
 * # ProductsListCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('ProductsListCtrl', function ($scope, products) {

		$scope.products = products;

	});