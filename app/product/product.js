(function () {
	'use strict';

	angular
		.module('app.product')
		.controller['Product', Product];

	Product.$inject = ['$scope'];

	function Product($scope)
	{
		console.log('product');
	};
	
})();