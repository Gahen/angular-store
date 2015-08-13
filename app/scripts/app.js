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
		'firebase',
		'angularStore.api'
	])
	.config(function ($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
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
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			});
	})
	.run(($rootScope, $state, auth) => {
		$rootScope.$on('$stateChangeStart', (event, toState) => {
			// Redirect to login if the user is not authenticated
			if (toState.name !== 'login' && !auth.$getAuth()) {
				event.preventDefault();
				$state.go('login');
			}
		});
	});
