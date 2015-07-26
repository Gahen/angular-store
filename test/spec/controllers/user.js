'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('angularStore'));

  let UserCtrl,
    scope,
    api,
    mockPromise,
    $rootScope,
    $controller,
    stateParams;

  beforeEach(inject(function ($injector, $q) {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    scope = $rootScope.$new();
    api = $injector.get('api');
    mockPromise = $q(resolve => {
      resolve({ uuid: 'testUuid'});
    });
    spyOn(api, 'getUsersByUserId').and.returnValue(mockPromise);
    spyOn(api, 'postUsers').and.returnValue(mockPromise);
    spyOn(api, 'putUsersByUserId').and.returnValue(mockPromise);
    spyOn(api, 'deleteUsersByUserId').and.returnValue(mockPromise);
  }));

  describe('Edit mode', () => {
    // Initialize the controller and a mock scope
    beforeEach(() => {
      stateParams = { id: 1 };
      UserCtrl = $controller('UserCtrl', {
        $scope: scope,
        $stateParams: stateParams,
        api: api
      });
    });

    it('should be defined', () => {
      expect(UserCtrl).toBeDefined();
    });

    it('should have a user object', () => {
      expect(scope.user).toBeDefined();
    });

    it('should call the api method to get a single user', () => {
      expect(api.getUsersByUserId).toHaveBeenCalled();
      $rootScope.$apply();
      expect(scope.user.uuid).toBeDefined();
    });

    it('should call the api method to update a user with the state id', () => {
      $rootScope.$apply();
      scope.user.test = 'test value';
      scope.save();
      expect(api.putUsersByUserId).toHaveBeenCalledWith({ userId: stateParams.id, body: scope.user });
    });

    it('should call the api method to delete a user with the state id', () => {
      $rootScope.$apply();
      scope.user.test = 'test value';
      scope.del();
      expect(api.deleteUsersByUserId).toHaveBeenCalledWith({ userId: stateParams.id });
    });
  });

  describe('Insert mode', () => {
    // Initialize the controller and a mock scope
    beforeEach(() => {
      stateParams = { id: 'new' };
      UserCtrl = $controller('UserCtrl', {
        $scope: scope,
        $stateParams: stateParams,
        api: api
      });
    });

    it('should have an empty user object', () => {
      expect(scope.user).toEqual({});
    });

    it('should call the api method to create a new user', () => {
      scope.save();
      expect(api.postUsers).toHaveBeenCalledWith({ body: scope.user });
    });
  });
});