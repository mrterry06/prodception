(function(){

  angular.module('templates', []);

  angular.module('app', [
  	'ui.router',
    'templates',
    'ngMessages',
    'ngAnimate',
    //Custom components
    'homePage',
    'prodForm',
    'ScrollingService',
    'PaymentService'
  ]);

  angular.module('app').config(appConfiguration);
  appConfiguration.$inject = ['$stateProvider', '$urlRouterProvider', '$compileProvider'];
  function appConfiguration ($stateProvider, $urlRouterProvider, $compileProvider) {

    $compileProvider.preAssignBindingsEnabled(true);
    $stateProvider
    .state('home', {
      url: '/',
      template: '<home-page></home-page>',
    })
    $urlRouterProvider.otherwise('/');
  }

})();
