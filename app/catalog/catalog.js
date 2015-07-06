(function () {
	'use strict';

	angular
		.module('app.catalog')
		.controller('Catalog', Catalog);

	Catalog.$inject = ['$scope'];

	function Catalog($scope)
	{
		$scope.products = [
			{
				id: 1,
				name: 'Checked Short Dress',
				price: 24.99
			},
			{
				id: 2,
				name: 'Checked Short Pants',
				price: 12.99
			},
			{
				id: 3,
				name: 'Checked Short Skirt',
				price: 17.99
			}

		]
		console.log('test');
	};
	
})();