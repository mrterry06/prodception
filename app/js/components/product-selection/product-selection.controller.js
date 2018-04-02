(function () {
  'use strict';
  angular.module('productSelection')
  .controller('productSelectionController', controller);

  controller.$inject = ['$state', '$scope', '$http',  'FormService', 'PaymentService'];
  function controller ($state, $scope, $http, FormService, PaymentService) {
  	const vm = this;

	vm.products = PaymentService.getProducts();
	vm.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
	vm.cart = {};
	vm.showCart = false;
	vm.price = 25;

	if (PaymentService.getCart() === null) {
		PaymentService.setCart(vm.cart);
	} else {
		vm.cart = PaymentService.getCart();
		generateTotal();
		checkCartVisbility();
	}

	vm.addToCart = (item) => {
		if (!item.size) item.size = vm.sizes[0];
		vm.cart[item.color] = itemCheck(item);
		vm.products = PaymentService.getProducts();
		checkCartVisbility();
		generateTotal();
	}

	vm.changeQuantity = (product, currentQuantity, increment) => {
		if (currentQuantity + increment < 0) return;
		product.quantity = currentQuantity + increment;
	}

	vm.changeSizeQuantity = (size, item, increment) => {
		const currentSizeQuantity = vm.cart[item].sizes[size];
		if (currentSizeQuantity + increment <= 0) {
			delete vm.cart[item].sizes[size];
			if (Object.keys(vm.cart[item].sizes).length <= 0 ) {
				delete vm.cart[item];
				checkCartVisbility();
			} else {
				vm.cart[item].quantity += increment;
			}
		} else {
			vm.cart[item].sizes[size] = currentSizeQuantity + increment;
			vm.cart[item].quantity += increment;
		}

		if (Object.keys(vm.cart).length <= 0) {
			checkCartVisbility();
		}
		
		generateTotal();
	}

	vm.changeSize = (product, size) => {
		product.size = size;
	}

	vm.removeItem = (item) => {
		delete vm.cart[item];
		checkCartVisbility();
		generateTotal();
	}

	vm.checkout = () => {
		$scope.$emit('change-view', 'payment-info');
	}

	function itemCheck(item) {
		item.sizes = { [item.size]: item.quantity || 1 }
		item.quantity = item.quantity || 1;

		if (!vm.cart.hasOwnProperty(item.color)) return item;
		
		const cartItem = vm.cart[item.color];
		const currentSizes = Object.keys(cartItem.sizes);
		item.sizes[item.size] = item.quantity;
		if (cartItem.sizes[item.size]) {
			item.sizes[item.size] += cartItem.sizes[item.size];
		}
		
		for (let size in cartItem.sizes) {
			if (!item.sizes[size]) {
				item.sizes[size] = cartItem.sizes[size];
			}
		}
	

		item.quantity += cartItem.quantity;
		return item;
	}

	function checkCartVisbility() {
		const cartItems = Object.keys(vm.cart);
		vm.showCart = cartItems.length;
	}

	function generateTotal() {
		let total = 0;
		for (const key in vm.cart) {
			total += vm.cart[key].quantity
		}

		vm.cartTotal = total * vm.price;
	}
  }
})();