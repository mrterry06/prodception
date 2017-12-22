(function () {
	angular.module('homePage')
		.controller('homePageController', controller);

	controller.$inject = ['$scope', 'homePageContent', 'productsService'];	
	function controller ($scope, homePageContent, productsService) {
		var vm = this;
		vm.content = homePageContent;

		vm.products = productsService.getProducts();

		// vm.socialLinks = [{
		// 	path: 'app/images/facebook.svg',
		// 	uiroute: '#',
		// 	href:'https://facebook.com'
		// }, {
		// 	path: 'app/images/email.svg',
		// 	uiroute: 'contact-us',
		// 	href: '#'
		// }, {
		// 	path: 'app/images/twitter.svg',
		// 	uiroute: '#',
		// 	href: 'https://twitter.com'
		// }];
	};
})();