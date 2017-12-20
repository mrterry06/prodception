(function () {
	'use strict';

	let $q = angular.module('$q');
	let $http = angulara.module('$http');

	function getProductionFlag() {
			let deferred = $q.defer();
			$http.get('/');

			return deferred.promise;
	}



	getProductionFlag.then(() => {
		angular.bootstrap(document, ['app']);
	});
})();