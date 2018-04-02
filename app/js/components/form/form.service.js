(function () {
	'use strict';
	angular.module('prodForm')
		.service('FormService', service);

	function service () {
		const service = this;
		const formData = {};
		const formConfigurations = {
			firstname: {
				formattedName: 'First Name',
				type: 'text',
				id: 'firstname',
				minlength: 2,
				maxlength: 15,
				required: true
			},
			lastname: {
				formattedName: 'Last Name',
				type: 'text',
				id: 'lastname',
				minlength: 2,
				maxlength: 15,
				required: true
			},
			phone: {
				formattedName: 'Phone (optional)',
				type: 'tel',
				id: 'phone',
				minlength: 10,
				maxlength: 11,
				required: false
			},
			email: {
				formattedName: 'Email',
				type: 'email',
				id: 'email',
				required: true
			},
			zipcode: {
				formattedName: 'Zip Code',
				type: 'tel',
				id: 'zipcode',
				minlength: 5,
				maxlength: 5,
				required: true
			}
		};

		service.getFormData = () => formData;
		service.getFormConfigurations = () =>  formConfigurations; 
	}
})();