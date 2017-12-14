(function () {
  'use strict';
  angular.module('homePage')
  .directive('homePage', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/components/home_page/home_page.html',
      controller: 'homePageController as homepage'
    };
  });
})();
