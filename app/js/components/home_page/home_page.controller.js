(function () {
	angular.module('homePage')
		.controller('homePageController', controller);

	controller.$inject = ['$scope', '$state','homePageContent', 'productsService'];	
	function controller ($scope, $state, homePageContent, productsService) {
		var vm = this;
		vm.content = homePageContent;
		vm.products = productsService.getProducts();
	};
})();