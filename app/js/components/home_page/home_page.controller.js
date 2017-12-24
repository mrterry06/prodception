(function () {
	angular.module('homePage')
		.controller('homePageController', controller);

	controller.$inject = ['$scope', 'homePageContent', 'productsService'];	
	function controller ($scope, homePageContent, productsService) {
		var vm = this;
		vm.content = homePageContent;

		vm.products = productsService.getProducts();

	};
})();