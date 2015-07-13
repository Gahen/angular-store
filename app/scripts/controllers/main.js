'use strict';

/**
 * @ngdoc function
 * @name angularStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStoreApp
 */
angular.module('angularStoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
