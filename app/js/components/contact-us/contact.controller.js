(function () {
  'use strict';
  angular.module('contactUs')
  .controller('contactController', controller);

  controller.$inject = ['$state', '$scope', '$http', 'SubmitService'];
  function controller ($state, $scope, $http, SubmitService) {
  	const vm = this;

  	vm.formContent = {
  		heading : 'Contact Us',
  		subheading: 'Send us a message and we will try to get back to you as soon as possible'
  	};
  }
})();