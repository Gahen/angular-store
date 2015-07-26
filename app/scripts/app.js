'use strict';

/**
 * @ngdoc overview
 * @name angularStore
 * @description
 * # angularStore
 *
 * Main module of the application.
 */
angular
	.module('angularStore', [
		'ngAnimate',
		'ngResource',
		'ngSanitize',
		'ngTouch',
		'ui.router',
		'angularStore.api'
	])
	.config(function ($stateProvider) {
		$stateProvider
			.state('product', {
				url: '/products/:id',
				templateUrl: 'views/product.html',
				controller: 'ProductCtrl'
			})
			.state('products', {
				url: '/products',
				templateUrl: 'views/products.html',
				controller: 'ProductsCtrl'
			})
			.state('user', {
				url: '/users/:id',
				templateUrl: 'views/user.html',
				controller: 'UserCtrl'
			})
			.state('users', {
				url: '/users',
				templateUrl: 'views/users.html',
				controller: 'UsersCtrl'
			});
	});
