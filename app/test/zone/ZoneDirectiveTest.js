'use strict';

describe('zone module', function() {
    beforeEach(module('zone'));
    beforeEach(module('templates'));

    describe('Zone directive', function() {
        var scope;

        beforeEach(inject(function($injector, $compile, $rootScope) {
            scope = $rootScope.$new();

            $compile('<ui-zone></ui-zone>')(scope);
            scope.$digest();
        }));

        it('should have no content', function() {
            console.log(scope);

            expect(scope.notifications).toBeEmptyArray();
        });
    });
});
