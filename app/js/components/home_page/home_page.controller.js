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
	};
})();