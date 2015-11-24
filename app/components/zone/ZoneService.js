'use strict';

angular.module('zone').service('ZoneService', 
    ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
        var DEFAULT_TIMEOUT = 3000; // default timeout is set at three seconds. Override by setting notification.timeout

        var self = this;

        this.state = {
            expanded: true
        };

        this.notifications = [];

        this.toggle = function() {
            self.state.expanded = !self.state.expanded;
        };

        this.register = function(notification) {
            self.notifications.push(notification);

            registerRemover(notification);
        };

        this.close = function(notification) {
            remove(notification);
        };

        function registerRemover(notification) {
            // TODO support multiple remove options for a single notification
            if (notification.timeout) {
                return registerTimeoutRemover(notification, notification.timeout);
            } else if (notification.removeOnEvent) {
                return registerEventRemover(notification, notification.removeOnEvent);
            } else {
                // use default timeout
                return registerTimeoutRemover(notification, DEFAULT_TIMEOUT);
            }
        }

        function remove(notification) {
            // Note: IE 8 and below does not suppor indexOf
            var index = self.notifications.indexOf(notification);

            if (index > -1) {
                self.notifications.splice(index, 1);
            }
        }

        /**
         * returns a function that, when called, will remove the passed in notification
         */
        function removeFn(notification) {
            return function(){
                remove(notification);
            }
        }

        function registerTimeoutRemover(notification, timeout) {
            $timeout(removeFn(notification), timeout);
        }

        function registerEventRemover(notification, event) {
            $rootScope.$on(event, removeFn(notification))
        }
    }]);
