'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
