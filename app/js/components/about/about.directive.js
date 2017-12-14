(function () {
  'use strict';
  angular.module('about')
  .directive('about', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/components/about/about.html',
      controller: 'aboutController as about'
    };
  });
})();
