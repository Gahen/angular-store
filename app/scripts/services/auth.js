'use strict';

/**
 * @ngdoc service
 * @name angularStore.auth
 * @description
 * # auth
 * Factory in the angularStore.
 */
angular.module('angularStore')
	.factory('auth', function ($firebaseAuth, fireUrl) {
		var ref = new Firebase(fireUrl);
		return $firebaseAuth(ref);
	});
