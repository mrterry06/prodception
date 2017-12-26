(function () {
  'use strict';
  angular.module('footer')
  .controller('footerController', controller);

  controller.$inject = ['$state', 'NavigationService'];
  function controller ($state, NavigationService) {
  	const vm = this;

    vm.navigate = (route) => {
      $state.go(route);
    };

  	vm.routes = [{
  		route: 'apply',
  		format: 'Apply Now'
  	}, {
      route: 'employment',
      format: 'Employment'
    }, {
  		route: 'contact-us',
  		format: 'Contact Us'
  	}];
  }
})();