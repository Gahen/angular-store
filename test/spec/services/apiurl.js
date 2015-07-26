'use strict';

describe('Service: apiUrl', function () {

	// load the service's module
	beforeEach(module('angularStore'));

	// instantiate service
	let apiUrl;
	beforeEach(inject(function (_apiUrl_) {
		apiUrl = _apiUrl_;
	}));

	it('should be defined', function () {
		expect(apiUrl).toBeDefined();
	});

});