(function () {
	'use strict';
	angular.module('verify')
		.directive('verify', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/verify/verify.html',
			controller: 'verifyController as verify'
		}
	}
})();