(function () {
	'use strict';

	angular
		.module('app.product')
		.config(appRun);

	appRun.$inject = ['$stateProvider'];

	function appRun ($stateProvider)
	{
		$stateProvider
			.state('product', {
				url: '/product/:id',
				templateUrl: 'app/product/product.html'
			});

	}

})();