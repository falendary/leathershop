(function () {
	
	'use strict';

	angular
		.module('admin.core')
		.controller('Application', Application);

	Application.$inject = ['$scope', 'AuthService']

	function Application ($scope, AuthService)
	{

		$scope.currentUser = null;
		$scope.isAuthorized = AuthService.isAuthorized;

		$scope.setCurrentUser = function(user) {
			$scope.currentUser = user;
		};

	}

})();