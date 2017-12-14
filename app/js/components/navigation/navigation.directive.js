(function () {
  'use strict';
  angular.module('navigation')
  .directive('navigation', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/components/navigation/navigation.html',
      controller: 'navigationController as navigation'
    };
  });
})();
