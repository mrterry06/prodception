(function () {
	'use strict';
	angular.module('prodForm')
		.directive('prodForm', directive);

	function directive () {
		return {
			restrict: 'E',
			templateUrl: 'app/js/components/form/form.html',
			controller: 'prodFormController as form',
			bindToController: {
				formType: '<',
				path: '<',
				content: '=',
				isApplication: '<',
				isContactUs: '<'
			}
		}
	}
})();