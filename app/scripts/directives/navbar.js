'use strict';

/**
 * @ngdoc directive
 * @name angularStore.directive:navbar
 * @description
 * # navbar
 */
angular.module('angularStore')
	.directive('angularStoreNavbar', function ($state, User, auth) {
		return {
			restrict: 'A',
			link: function postLink(scope) {

				let authData = auth.$getAuth();

				let updateSession = authData => {
					if (authData) {
						scope.user = new User(authData.uid);
					} else {
						scope.user = null;
					}
				};

				auth.$onAuth(authData => {
					updateSession(authData);
				});

				scope.logout = () => {
					auth.$unauth();
					$state.go('login');
				};

				updateSession(authData);

			}
		};
	});
