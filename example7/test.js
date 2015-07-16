describe('PasswordController', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    var $scope, controller;
    beforeEach(function() {
      $scope = {};
      controller = $controller('PasswordController', { $scope: $scope });
    });

    it('test password weak', function() {
      $scope.password = ''
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });

    it('test password medium', function() {
      $scope.password = 'abca'
      $scope.grade();
      expect($scope.strength).toEqual('medium');
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
});
