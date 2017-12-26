(function(){

  angular.module('templates', []);

  angular.module('app', [
  	'ui.router',
    'templates',
    'ngMessages',
    'ngAnimate',
    //Custom components
    'navigation',
    'header',
    'footer',
    'homePage',
    'contactUs',
    'about',
    'products',
    'application',
    'prodForm',
    'employment',
    'modal',
    //Services
    'ScrollingService',
    'SubmitService'
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
    .state('about', {
      url: '/about',
      template: '<about></about>'
    })
    .state('products', {
      url: '/products',
      template: '<products></products>'
    })
    .state('apply', {
      url: '/apply',
      template: '<application></application>'
    })
    .state('employment', {
      url: '/employment',
      template: '<employment></employment>'
    })
    .state('contact-us', {
      url: '/contact-us',
      template: '<contact-us></contact-us>'
    });


    $urlRouterProvider.otherwise('/');
  }

})();
