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

    }
})();