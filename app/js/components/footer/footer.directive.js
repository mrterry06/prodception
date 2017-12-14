(function () {
	'use strict';
	angular.module('footer')
		.directive('footer', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/footer/footer.html',
			controller: 'footerController as footer'
		}
	}
})();