(function () {
	angular.module('homePage')
		.controller('homePageController', controller);

	controller.$inject = ['$scope', 'homePageContent'];	
	function controller ($scope, homePageContent) {
		var vm = this;
		vm.content = homePageContent;
		vm.productCategories = [
		{
			title: 'Technology',
			source: 'app/images/smartphone-1.svg'
		}, {
			title: 'Real Estate',
			source: 'app/images/flats.svg'
		}, {
			title: 'Storage Services',
			source: 'app/images/package.svg'
		}];

		vm.socialLinks = [{
			path: 'app/images/facebook.svg',
			uiroute: '#',
			href:'https://facebook.com'
		}, {
			path: 'app/images/email.svg',
			uiroute: 'contact-us',
			href: '#'
		}, {
			path: 'app/images/twitter.svg',
			uiroute: '#',
			href: 'https://twitter.com'
		}];
	};
})();