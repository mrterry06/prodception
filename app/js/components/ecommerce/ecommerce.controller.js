(function () {
  'use strict';
  angular.module('ecommerce')
	  .controller('ecommerceController', controller);

  controller.$inject = ['$state', '$scope', '$http', '$timeout'];
  function controller ($state, $scope, $http, $timeout) {
	  const vm = this;
	  const flow = ['cart', 'payment-info', 'verify', 'spinner', 'decision'];
	  vm.view = flow[0];
	  
	  vm.incrementFlow = (newIdx) => {
		  vm.view = flow[newIdx];
		}

		$scope.$on('change-view', (e, data) => {
			vm.view = data;
			if (data === 'spinner') {
				vm.submit();
			}
		});
		
		vm.submit = () => {
			$timeout(() => {
				vm.incrementFlow(4);
			}, 3000);
		}
  }
})();