(function () {
  'use strict';
  angular.module('verify')
  .controller('verifyController', controller);

  controller.$inject = ['$state', '$scope', '$http',  'FormService', 'PaymentService'];
  function controller ($state, $scope, $http, FormService, PaymentService) {
  	const vm = this;
	const content = FormService.getFormData();
	const exceptionFields = ['card', 'exp', 'cvv'];

	// PaymentService.setupBraintree();
	
	vm.cart = PaymentService.getCart();
	generateTotal();

	console.log(vm.cart);

	vm.changeView = (v) => {
		$scope.$emit('change-view', v);
	}
	
	vm.isNotExceptionField = (field) =>  !exceptionFields.includes(field);
	vm.content = formatContent();
	function formatContent() {
		const formattedContent = {};
		for (let field in content) {
			if (field === 'card') {
				formattedContent[field] = content[field].split('')
				.map((val, idx) => {
					if (idx < content[field].split('').length - 4) {
						if ( (idx + 1) % 4 === 0) {
							return 'x-';
						}
						return 'x';
					} 
					return val;
				}).join('');
			} else {
				formattedContent[field] = content[field];
			}
		}

		return formattedContent;
	}

	function generateTotal() {
		let total = 0;
		for (const key in vm.cart) {
			total += vm.cart[key].quantity
		}

		vm.cartTotal = total * 25;
	}
  }
})();