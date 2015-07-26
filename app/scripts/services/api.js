'use strict';

/**
 * @ngdoc service
 * @name angularStore.api
 * @description
 * # api
 * Factory in the angularStore.
 */
angular.module('angularStore')
	.factory('api', (Api, apiUrl) => {
		return new Api(apiUrl);
	}); //TODO: organizar archivos modulo api
