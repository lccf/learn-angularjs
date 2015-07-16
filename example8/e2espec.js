describe('PasswordController', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/example8/index.html');
  });
  describe('$scope.grade', function() {
    it('test password weak', function() {
      element(by.model('password')).sendKeys('abc');
      expect(element(by.binding('strength')).getText()).
        toEqual('weak');
    });
    it('test password medium', function() {
      element(by.model('password')).sendKeys('abca');
      expect(element(by.binding('strength')).getText()).
        toEqual('medium');
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      element(by.model('password')).sendKeys('longerthaneightchars');
      expect(element(by.binding('strength')).getText()).
        toEqual('strong');
    });
  });
});
