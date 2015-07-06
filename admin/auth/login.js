(function () {

	'use strict';

	angular
		.module('admin.auth')
		.controller('Login', Login);

	Login.$inject = ['$scope', '$rootScope', '$state', 'AUTH_EVENTS', 'AuthService']

	function Login($scope, $rootScope, $state, AUTH_EVENTS, AuthService)
	{
		$scope.credentials = {
			login: '',
			password: ''
		};

		$scope.login = function(credentials)
		{
			AuthService.login(credentials).then(function (user)
			{
				$rootScope.$broadcast(AUTH_EVENTS().loginSuccess);
				$scope.setCurrentUser(user);
				$state.go('admin.interface.dashboard');

			}, function() {
				$rootScope.$broadcast(AUTH_EVENTS().loginFailed);
				$state.go('admin.auth.login');
			});
		};
	};

})();