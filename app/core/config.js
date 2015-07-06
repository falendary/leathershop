(function () {
	'use strict';

	angular
		.module('app.core')
		.config(appRun);

	appRun.$inject = ['$locationProvider', '$urlRouterProvider'];

	function appRun($locationProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise('/catalog');
		$locationProvider.html5Mode(true);
	}
})();