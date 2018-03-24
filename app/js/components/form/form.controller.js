(function () {
  'use strict';
  angular.module('prodForm')
  .controller('prodFormController', controller);

  controller.$inject = ['$state', '$scope', '$http',  'FormService'];
  function controller ($state, $scope, $http, FormService) {
  	const vm = this;

  	vm.formData = {};
	vm.submitError = false;
	vm.submitSucess = false;

	vm.formConfigurations = FormService.getFormConfigurations(vm.isContactUs);

	vm.submit = () => {
		// This ugly
		if ($scope.mainForm.$valid) {
			vm.formData.subject = 'Contract Application';
			if (vm.isContactUs) {
				vm.formData.subject = 'Customer Contact';
			}

			SubmitService.sendMessage(vm.path, vm.formData)
				.then((wasSent) => {
					vm.submitSucess = wasSent;
					vm.submitError = !vm.submitSucess;
					vm.formData = {};
					console.log( ` ${vm.formType} submitted sucessfully`);
				}, () => {
					vm.submitError = true;
				})
				.catch(() => {
					vm.submitError = true;
				});

		} 
	}
  }
})();