(function () {
  'use strict';
  angular.module('navigation')
  .controller('navigationController', controller);

  controller.$inject = ['$state', 'NavigationService'];
  function controller ($state, NavigationService) {
  	const vm = this;
    vm.menuSettings = NavigationService;

  	vm.toggleMenu = () => {
  		vm.menuSettings.isMenuOpen = !vm.menuSettings.isMenuOpen;
  	};

  	vm.navigate = (route) => {
  		$state.go(route);
  		vm.menuSettings.closeMenu();
  	};

  	vm.routes = [{
  		route: 'home',
  		format: 'Home',
  	}, {
  		route: 'about',
  		format: 'About'
  	}, {
  		route: 'products',
  		format: 'Products'
  	}, {
  		route: 'apply',
  		format: 'Apply Now'
  	}, {
  		route: 'contact-us',
  		format: 'Contact Us'
  	}];
  }
})();