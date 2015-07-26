'use strict';

/**
 * @ngdoc function
 * @name angularStoreApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the angularStoreApp
 */
angular.module('angularStoreApp')
  .controller('angularStoreApp.ProductCtrl', function ($scope, $stateParams, Product) {
    
    let { id } = $stateParams;
    
    $scope.product = id ? Product.get({ productId: id }) : new Product();
    
    $scope.save = () => {
      Product.$save();
    };
  });