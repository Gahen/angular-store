'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:NewProductCtrl
 * @description
 * # NewProductCtrl
 * Controller of the angularStoreApp
 */
angular.module('angularStore')
	.controller('NewProductCtrl', ($scope, $state, api) => {

    $scope.product = {};

    $scope.save = () => {
      api.postProducts({body: $scope.product}).then(() => {
        $state.go('products.list');
      });
    };

	});