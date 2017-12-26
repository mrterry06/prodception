(function () {
	'use strict';
	angular.module('app')
		.controller('appController', controller);

	controller.$inject = ['$scope', '$state', 'ScrollingService', 'NavigationService'];
	function controller ($scope, $state, ScrollingService, NavigationService) {
		$scope.modalInfo = {
			applicationModal: false,
			employmentModal: false
		};

		$scope.$on('openModal', (emitInfo, data) => {
			let mi = $scope.modalInfo;
			mi[data.modal] = true;
		});

		$scope.$watch(() => {
			return $state.$current.name;
		}, () => {
			NavigationService.closeMenu();
			ScrollingService.scrollToTop();
		});

		$scope.closeModal = (event) => {
			const elementClasses = ['prodception-close-icon', 'prodception-overlay'];
			const isTargetElement = elementClasses.some((className) => {
				return  event.target.className.includes(className);
			});
			if (isTargetElement) {
				const mi = $scope.$parent.modalInfo;
				mi.applicationModal = mi.employmentModal = false;
			}
		};
	}	

})();