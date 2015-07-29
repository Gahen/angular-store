'use strict';

/**
 * @ngdoc service
 * @name angularStoreApp.Product
 * @description
 * # Product
 * Factory in the angularStoreApp.
 */
angular.module('angularStoreApp')
  .factory('Product', function ($resource, apiUrl) {
    let Product = $resource(`${apiUrl}products/:productId`);

    // Public API here
    return Product;
  });