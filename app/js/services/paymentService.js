(function () {
    'use strict';

    angular.module('PaymentService', [])
        .service('PaymentService', paymentService);
    paymentService.$inject = ['$window'];
    function paymentService($window) {

        const service = this;

        service.setupBraintree = () => {
            console.log($window);
        }

      const products = [{
          color: 'black-gold',
          img: 'app/images/shirts/shirt-black-gold.jpg'
        }, {
          color: 'black-white',
          img: 'app/images/shirts/shirt-black-white.jpg'
        }, {
          color: 'gray-black',
          img: 'app/images/shirts/shirt-gray-black.jpg'
        }, {
          color: 'white-black',
          img: 'app/images/shirts/shirt-white-black.jpg'
        }];

      service.getProducts = () => angular.copy(products);



    }
})();