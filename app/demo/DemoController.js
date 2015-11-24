angular.module('zone').value('PATH', 'components/');

angular.module('zone').controller('DemoController',
    ['ZoneService',
        function (ZoneService) {
            var self = this;
            
            this.addNotification = function() {
                self.newNotification.type = "text";
                
                var notificationCopy = angular.copy(self.newNotification);
                ZoneService.register(notificationCopy);
            }
        }]);