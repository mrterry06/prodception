(function () {
	'use strict';
	angular.module('productSelection')
		.directive('productSelection', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/product-selection/product-selection.html',
			controller: 'productSelectionController as productSelection'
		}
	}
})();