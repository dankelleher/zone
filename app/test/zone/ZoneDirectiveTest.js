'use strict';

describe('zone module', function() {
    beforeEach(module('zone'));

    describe('Zone directive', function() {
        it('should do nothing yet', function() {
            inject(function($compile, $rootScope) {
                var element = $compile('<ui-zone></ui-zone>')($rootScope);
                expect(element.text()).toEqual('Hello World');
            });
        });
    });
});
