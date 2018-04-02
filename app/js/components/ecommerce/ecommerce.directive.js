(function () {
	'use strict';
	angular.module('ecommerce')
		.directive('ecommerce', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/ecommerce/ecommerce.html',
			controller: 'ecommerceController as ecommerce',

		}
	}
})();