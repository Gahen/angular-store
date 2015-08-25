'use strict';

/**
 * @ngdoc function
 * @name angularStore.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angularStore
 */
angular.module('angularStore')
	.controller('UserCtrl', ($scope, $stateParams, api) => {

		let id = $stateParams.id;

		$scope.user = {};

		if (id !== 'new') {
			$scope.editMode = true;
			api.getUsersByUserId({userId: id}).then((data) => {
				$scope.user = data;
			});
		}

		$scope.save = () => {
			if ($scope.editMode) {
				api.putUsersByUserId({
					userId: id,
					body: $scope.user
				});
			} else {
				api.postUsers({ body: $scope.user });
			}
		};

		$scope.del = () => {
			api.deleteUsersByUserId({userId: id});
		};

	});