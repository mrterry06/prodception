(function () {
	'use strict';
	angular.module('application')
		.directive('application', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/application/application.html',
			controller: 'applicationController as application'
		}
	}
})();