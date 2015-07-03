'use strict';
    describe('vampireKittiesLogIn', function() {
        //following documentation https://docs.angularjs.org/guide/unit-testing
        var $compile,
        $rootsScope;


    beforeEach(module('vampireKitties')); //module with directive being tested on
    beforeEach(module('vampire-kitties.html'));//template partial


    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootsScope = _$rootScope_;

    }));

    it('should render the elements on log in html page', function(){

        var element = $compile("<opt-in></opt-in>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("<div class='brand-logo'>");
    });

});


