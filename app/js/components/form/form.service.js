(function () {
	'use strict';
	angular.module('prodForm')
		.service('FormService', service);

	function service () {
		const service = this;
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
				formattedName: 'Phone',
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
			},
			company: {
				formattedName: 'Company',
				type: 'text',
				id: 'company',
				minlength: 2,
				required: true
			}
		};

		service.getFormConfigurations = (isContactUs) => {
			let conactUsForm = ['firstname', 'lastname', 'email', 'phone'];
			if (isContactUs) {
				return conactUsForm.map((id) => {
					return formConfigurations[id];
				});
			}

			return mapObj(formConfigurations, (fieldConfig) => {
				return fieldConfig;
			});

		}

		function mapObj (obj, callback) {
			let transformedData = [];
			for (var key in obj) {
				transformedData.push(callback(obj[key], key));
			}
			return transformedData;
		}
	}
})();