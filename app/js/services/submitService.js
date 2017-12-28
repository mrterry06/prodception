(function () {
	'use strict';

	angular.module('SubmitService', [])
		.service('SubmitService', service);

	function service ($http) {
		const requestRoot = 'http://localhost:3000';
		const service = this;

		service.sendMessage = (path, data) => {
			return 	$http.post(path, data);
		};

	}	
})();