(function () {
	'use strict';
	angular.module('contactUs')
		.directive('contactUs', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/contact-us/contact.html',
			controller: 'contactController as contact'
		}
	}
})();