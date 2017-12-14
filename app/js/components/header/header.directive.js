(function () {
	'use strict';
	angular.module('header')
		.directive('header', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/header/header.html'
		}
	}
})();