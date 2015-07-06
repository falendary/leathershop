(function () {
	
	'use strict';

	angular.module('admin.constants', [])
		.constant('AUTH_EVENTS', authEvents);

	function authEvents()
	{
		return {
			loginSuccess: 'auth-login-success',
			loginFailed: 'auth-login-failed',
			logoutSuccess: 'auth-logout-success',
			sessionTimeout: 'auth-session-timeout',
			notAuthenticated: 'auth-not-authenticated',
			notAuthorized: 'auth-not-authorized'
		}
	}

})();