(function () {
  'use strict';
  angular.module('application')
  .controller('applicationController', controller);

  controller.$inject = ['$state', '$scope', '$http', 'SubmitService'];
  function controller ($state, $scope, $http, SubmitService) {
  	const vm = this;

    $scope.modalOptions = {
      isVisible: false,
      openModal: function () {
        this.isVisible = true;
      },
      closeModal: function () {
        this.isVisible = false;
        $scope.$parent.modalOptions.isVisible = false;
      }
    };

    

  	vm.formContent = {
		  heading : 'Apply Today',
		  subheading: 'Send us a message and we will try to get back to you as soon as possible'
	   };
  }
})();