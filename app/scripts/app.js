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
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.state('products', {
				abstract: true,
				url: '/products',
				template: '<div ui-view></div>'
			})
			.state('products.list', {
				url: '',
				templateUrl: 'views/products.list.html',
				controller: 'ProductsListCtrl',
				resolve: {
					products: api => {
						return api.getProducts();
					}
				}
			})
			.state('products.new', {
				url: '/new',
				templateUrl: 'views/products.detail.html',
				controller: 'NewProductCtrl'
			})
			.state('products.edit', {
				url: '/:productId',
				templateUrl: 'views/products.detail.html',
				controller: 'EditProductCtrl',
				resolve: {
					product: function ($stateParams, api) {
						return api.getProductsByProductId({productId: $stateParams.productId});
					}
				}
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
		$urlRouterProvider
		.otherwise('/');
	})
	.run(($rootScope, $state, auth) => {

		$rootScope.$on('$stateChangeStart', (event, toState) => {
			// Redirect to login if the user is not authenticated
			if (toState.name !== 'login' && !auth.$getAuth()) {
				event.preventDefault();
				$state.go('login');
			}
		});

		$rootScope.$on('$stateChangeError', () => {
			alert('There was an error loading data.');
		});

		$rootScope.$state = $state;

	});
