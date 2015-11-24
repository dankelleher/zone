'use strict';

angular.module('zone')
    .directive('uiZone', ['ZoneService', function(ZoneService) {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'components/zone/zone.html',
            controller: function($scope) {
                console.log("Hi ***");
                $scope.toggle = ZoneService.toggle;

                $scope.state = ZoneService.state;

                $scope.notifications = ZoneService.notifications;

                $scope.templateSrc = function(notification) {
                    if (notification.templateSrc) return notification.templateSrc;

                    return 'components/zone/templates/' + notification.type + '.html';
                }
            }
        };
    }]);
