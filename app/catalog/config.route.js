(function () {
	'use strict';

	angular
		.module('app.catalog')
		.config(appRun);

	appRun.$inject = ['$stateProvider'];

	function appRun($stateProvider)
	{
		$stateProvider
			.state('catalog', {
				url: '/catalog',
				templateUrl: 'app/catalog/catalog.html'
			});
	}

})();