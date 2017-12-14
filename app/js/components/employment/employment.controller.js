(function () {
  'use strict';
  angular.module('employment')
  .controller('employmentController', controller);

  controller.$inject = ['employmentService'];
  function controller (employmentService) {
  	const vm = this;

  	vm.positions = employmentService.getJobListings();
  }
})();