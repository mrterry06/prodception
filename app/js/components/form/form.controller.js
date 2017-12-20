(function () {
  'use strict';
  angular.module('prodForm')
  .controller('prodFormController', controller);

  controller.$inject = ['$state', '$scope', '$http', 'SubmitService', 'FormService'];
  function controller ($state, $scope, $http, SubmitService, FormService) {
  	const vm = this;

  	vm.formData = {};
	vm.submitError = false;
	vm.submitSucess = false;

	console.log(vm);

	vm.formConfigurations = FormService.getFormConfigurations(vm.isContactUs);

	vm.submit = () => {
		if ($scope[vm.formType].$valid && false) {
			SubmitService.sendMessage(vm.path, vm.formData)
				.then(() => {
					vm.submitSucess = true;
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