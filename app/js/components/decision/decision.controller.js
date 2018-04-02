(function () {
  'use strict';
  angular.module('decision')
  .controller('decisionController', controller);

  controller.$inject = ['PaymentService'];
  function controller (PaymentService) {
    const vm = this;
    const content = {
      approved: {
        header: 'Congratulations!',
        subheader: 'Your Purchase was Complete',
        reason: 'We\'ve emailed you a reviept of your order. A follow up Email will be given with your shipping details.',
        icon: 'app/images/icons/smiley-face.svg',
        thankyouMessage: 'Thanks For your \n support, \n Carlie'
      },
      declined: {
        header: 'Uh-Oh!',
        subheader: 'Something went Wrong',
        reason: 'This could be because of a few things. Please validate your payment information & if the problem presist contact us',
        icon: 'app/images/icons/sad-face.svg'
      }
    };

    PaymentService.getPaymentDecision()
      .then((res) => {
        vm.displayedContent = content[res.data];
      });
  }
})();