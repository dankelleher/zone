'use strict';

angular.module('zone')
    .directive('uiZone', ['ZoneService', 'PATH', function(ZoneService, PATH) {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: PATH + 'zone/zone.html',
            controller: function($scope) {
                $scope.toggle = ZoneService.toggle;
                $scope.state = ZoneService.state;
                $scope.notifications = ZoneService.notifications;

                $scope.templateSrc = function(notification) {
                    if (notification.templateSrc) return notification.templateSrc;

                    return PATH + 'zone/templates/' + notification.type + '.html';
                }
            }
        };
    }]);
