'use strict';

/**
 * @ngdoc service
 * @name angularStore.User
 * @description
 * # User
 * Factory in the angularStore.
 */
angular.module('angularStore')
	.factory('User', function ($firebaseObject, fireUrl) {
		return userUid => {

      let ref = new Firebase(fireUrl);

      return $firebaseObject(ref.child('users').child(userUid));

		};
	});
