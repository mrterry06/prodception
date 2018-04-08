(function () {
  'use strict';
  angular.module('prodForm')
  .controller('prodFormController', controller);

  controller.$inject = ['$state', '$scope', '$http',  'FormService', 'PaymentService'];
  function controller ($state, $scope, $http, FormService, PaymentService) {
	  const vm = this;

    vm.formData = FormService.getFormData();
      
    vm.formConfigurations = FormService.getFormConfigurations(vm.isContactUs);
    vm.products = PaymentService.products;

    console.log($scope);

    vm.confirmOrder = () => {
      $scope.$emit('change-view', 'verify');
    }

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
    
    vm.preFillApp = () => {
      const prefillData = {
        firstname: 'Scott',
        lastname: 'Terry',
        email: 'mrterry06@gmail.com',
        card: '1234567891234567',
        cvv: '123',
        exp: '12/13',
        zipcode: '42420',
        phone: 2702440823
      };
      
      for (const field in prefillData) {
        vm.formData[field] = prefillData[field];
      }
    }
  }
})();