(function () {
  'use strict';
  angular.module('employment')
  .controller('employmentController', controller);

  controller.$inject = ['$scope','employmentService'];
  function controller ($scope, employmentService) {
  	const vm = this;

  	vm.openModal = () => {
  		$scope.$emit('openModal', {
  			modal: 'employmentModal'
  		});
  	};
  	vm.positions = employmentService.getJobListings();
  }
})();