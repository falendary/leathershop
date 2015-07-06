(function () {

	'use strict';

	angular
		.module('admin.auth')
		.factory('AuthService', AuthService);

	AuthService.$inject = ['$http', '$state', 'Session'];

	function AuthService($http, $state, Session)
	{
		var authService = {};

		authService.login = function(credentials) 
		{
			return $http
				.post('/api/user', credentials)
				.then(function (res){
					Session.create( res.data.sessionId,
									res.data.user.id,
								    res.data.user.role);
					return res.data.user;
				});
		};

		authService.isAuthenticated = function()
		{
			 return $http.post('api/sessions/check.php');
		};

		authService.isAuthorized = function (authorizedRoles)
		{
			if (!angular.isArray(authorizedRoles)) {
				authorizedRoles = [authorizedRoles];
			}

			return (this.isAuthenticated() &&
			authorizedRoles.indexOf(Session.userRole) !== -1);
		};

		authService.logout = function()
		{
			Session.destroy();
			$state.go('admin.auth.login');
		};


		return authService;
	}

})();