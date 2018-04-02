(function () {
	'use strict';
	angular.module('decision')
		.directive('decision', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/decision/decision.html',
			controller: 'decisionController as decision'
		}
	}
})();