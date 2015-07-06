(function () {
	
	'use strict';

	angular
		.module('admin.dashboard')
		.config(appRun);

	appRun.$inject = ['$stateProvider'];

	function appRun($stateProvider)
	{
		$stateProvider
			.state('admin.interface.dashboard',
			{
				url: '',
				parent: 'admin.interface',
				templateUrl: 'admin/dashboard/dashboard.html',
				controller: 'Dashboard',
				data: {
					requireLogin: true
				}
			});
	}

})();