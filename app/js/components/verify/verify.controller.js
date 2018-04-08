(function () {
  'use strict';
  angular.module('verify')
  .controller('verifyController', controller);

  controller.$inject = ['$state', '$scope', '$http',  'FormService', 'PaymentService'];
  function controller ($state, $scope, $http, FormService, PaymentService) {
  	const vm = this;
	const content = FormService.getFormData();
	const exceptionFields = ['card', 'exp', 'cvv'];

	PaymentService.setupBraintree();
	
	
	vm.cart = PaymentService.getCart();
	generateTotal();

	console.log(vm.cart);

	vm.changeView = (v) => {
		$scope.$emit('change-view', v);
	}

	vm.test = (e) => {
		console.log('submitting');
		$http.post('http://localhost:3000/checkout-test', getPersonalData())
			.then((res) => {
				const response = res.data;
				console.log(res.data);
			});
		return true;	
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

	function getPersonalData() {
		const keysToExclude = ['card', 'exp', 'cvv'];
		const personalData = {};
		for (const key in content) {
			if (!keysToExclude.includes(key)) {
				personalData[key] = content[key];
			}
		}

		return personalData;
	}
  }
})();