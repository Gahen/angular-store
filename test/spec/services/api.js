'use strict';

describe('Service: api', function () {

	// load the service's module
	beforeEach(module('angularStore'));

	// instantiate service
	var api,
		Api;
	beforeEach(inject(function ($injector) {
		api = $injector.get('api');
		Api = $injector.get('Api');
	}));

	it('should be defined', () => {
		expect(api).toBeDefined();
	});

	it('should be an instance of the Api service', () => {
		expect(api instanceof Api).toBe(true);
	});

});
