'use strict';

describe('Controller: UsersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularStore'));

  var UsersCtrl,
    scope,
    api,
    mockPromise,
    $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $injector, $q) {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    api = $injector.get('api');
    mockPromise = $q(resolve => {
      resolve([{ uuid: 'testUuid'}]);
    });
    spyOn(api, 'getUsers').and.returnValue(mockPromise);
    UsersCtrl = $controller('UsersCtrl', {
      $scope: scope
    });
  }));

  it('should call the api method to get a list of users', () => {
    expect(api.getUsers).toHaveBeenCalled();
    $rootScope.$apply();
    expect(Array.isArray(scope.users)).toBe(true);
    expect(scope.users.length).toBe(1);
    expect(scope.users[0].uuid).toBe('testUuid');
  });
});