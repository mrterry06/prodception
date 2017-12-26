(function () {
	'use strict';
	angular.module('app')
		.controller('appController', controller);

	controller.$inject = ['$scope'];
	function controller ($scope) {
		$scope.modalInfo = {
			applicationModal: false,
			employmentModal: false
		}

		$scope.test = 'test';

		$scope.$on('openModal', (emitInfo, data) => {
			let mi = $scope.modalInfo;
			mi[data.modal] = true;
		});

		$scope.stopPropagation = (event) => {
			console.log('stopPropagation');
			event.stopPropagation();
		};

		$scope.closeModal = (event) => {
			const isTargetElement = ['overlay', 'close-icon'].some((className) => {
				return  event.target.className.includes(className);
			});
			if (isTargetElement) {
				const mi = $scope.$parent.modalInfo;
				mi.applicationModal = mi.employmentModal = false;
			}
		};
	}	

})();