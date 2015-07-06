(function () {

	'use strict';

	angular
		.module('admin.core')
		.config(appRun);

	appRun.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

	function appRun($stateProvider, $locationProvider, $urlRouterProvider)
	{
		$stateProvider
			.state('admin', {
				url: '/admin',
				template: '<ui-view/>',
				abstract: true
			})
			.state('admin.auth',
			{
				url: '',
				parent: 'admin',
				templateUrl: 'admin/auth/shell.html',
				abstract: true
			})
			.state('admin.interface', {
				url: '',
				parent: 'admin',
				templateUrl: 'admin/layout/shell.html',
				abstract: true,
				data: {
					requireLogin: true
				}
			});
		$urlRouterProvider.otherwise('/admin');
		$locationProvider.html5Mode(true);	
	}
	
})();