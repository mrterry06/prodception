(function () {
  'use strict';
  angular.module('products')
  .service('productsService', service);

  service.$inject = [];
  function service () {
  	const service = this;

    const products = [{
      title: 'Apptex Web, Robotic and Application development',
      imgsource: 'app/images/apple-screens-medium.png',
      summary: `Apptex is an innovative technology development company.
          Apptex integrates machine learning into the development
          of it's application to give consumers the best quality product.
          From custom drone production to an application released to the app store,
          Apptex is able to give consumers exaclty what they are looking for at a
          competive price. `
    }, {
      title: 'Vlace Real Estate',
      imgsource: 'app/images/apartment.jpg',
      summary: `If you\'re looking for a new house, aparment or duplex try Vlace Real Estate.
      Vlace represents valued places at a fantastic cost. Check us out now and call today to set up
      a tour of our different places.`
    }, {
      title: 'LockSpace Storage Services and Units',
      imgsource: 'app/images/storage-units.jpg',
      summary: `LockSpace offers Storage space to anybody looking to put their belongings
      in a secure self storage space.`
    }];

  	service.getProducts = () => {
  		return products;
  	}
  }
})();