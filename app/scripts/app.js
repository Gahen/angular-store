'use strict';

/**
 * @ngdoc overview
 * @name angularStoreApp
 * @description
 * # angularStoreApp
 *
 * Main module of the application.
 */
angular
  .module('angularStoreApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product/:id',
        templateUrl: 'views/product.html',
        controller: 'angularStoreApp.ProductCtrl'
      });
  });
