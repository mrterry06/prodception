(function () {
    'use strict';

    angular.module('PaymentService', [])
        .service('PaymentService', paymentService);
    paymentService.$inject = ['$window', '$http'];
    function paymentService($window, $http) {

        const service = this;
        const decision = 'approved';
        const root = 'http://localhost:3000';
        let cart = null;

        service.setupBraintree = () => {
            $http.get(`${root}/client-token`)
              .then((res) => {
                const clientToken = res.data;
                braintree.setup(clientToken, 'custom', { id: 'verify-form' });
              });          
        }

        service.setCart = (newCart) => {
          cart = newCart;
        }

        service.getCart = () => cart;
        
        service.submitPayment = () => {
          console.log('Submitting Payment');
        }

        service.getPaymentDecision = () => {
          return $http.get(`${root}/payment-verification`);
        };

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