'use strict';

angular.module('zone')
    .directive('uiZone', ['ZoneService', function(ZoneService) {
        return function(scope, elm, attrs) {
            elm.text("Hello World");
        };
    }]);
