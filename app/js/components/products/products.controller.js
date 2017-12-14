(function () {
	angular.module('products')
		.controller('productsController', controller);

	controller.$inject = ['$scope'];	
	function controller ($scope) {
		var vm = this;
		vm.content = {
			title: 'Prodception',
			about: 'AMAZING ASS PROTDUCTDAFA',
			description: 'AMAINGGG ASS PRODUCt'
		};
	};
})();