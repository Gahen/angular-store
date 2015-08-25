'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('LoginCtrl', function ($scope, $state, auth) {

		$scope.credentials = {};

		$scope.login = function() {
			$scope.authData = null;
			$scope.error = null;

			auth.$authWithPassword($scope.credentials).then(function(authData) {
				$scope.authData = authData;
			}).catch(function(error) {
				$scope.error = error;
			});
		};

		auth.$onAuth((authData) => {
			if (authData) {
				$state.go('main');
			}
		});
	});
