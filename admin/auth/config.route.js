(function () {
	
	'use strict';

	angular
		.module('admin.auth')
		.config(appRun);

	appRun.$inject = ['$stateProvider'];

	function appRun($stateProvider)
	{
		$stateProvider
			.state('admin.auth.login',
			{
				url: '',
				parent: 'admin.auth',
				templateUrl: 'admin/auth/login.html',
				controller: 'Login'
			})
	}

})();