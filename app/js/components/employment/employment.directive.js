(function () {
	'use strict';
	angular.module('employment')
		.directive('employment', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/employment/employment.html',
			controller: 'employmentController as employment'
		}
	}
})();