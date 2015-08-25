'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('UsersCtrl', ($scope, api) => {
		api.getUsers().then((data) => {
			$scope.users = data;
		});
	});
