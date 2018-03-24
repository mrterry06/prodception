(function () {
	angular.module('homePage')
		.controller('homePageController', controller);

	controller.$inject = ['$scope', '$state','homePageContent'];	
	function controller ($scope, $state, homePageContent) {
		var vm = this;
		vm.content = homePageContent;
	};
})();