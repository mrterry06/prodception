(function () {
	'use strict';
	angular.module('navigation')
		.service('NavigationService', service);

	service.$inject = ['ScrollingService']	
	function service (ScrollingService) {
		const service = this;

		service.isMenuOpen = false;

		service.closeMenu = () => {
			service.isMenuOpen = false;
			ScrollingService.scrollToTop(true);
		};

	}
})();