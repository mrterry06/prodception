(function () {
  'use strict';
  angular.module('products')
  .directive('products', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/components/products/products.html',
      controller: 'productsController as products'
    };
  });
})();
