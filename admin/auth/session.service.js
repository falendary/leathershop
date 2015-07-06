(function () {
	
	'use strict';

	angular
		.module('admin.auth')
		.service('Session', Session);

	Session.$inject = ['$http'];

	function Session($http)
	{
		this.create = function (sessionId, userId, userRole)
		{
			return sessionStorage.setItem('user', sessionId);
		};

		this.get = function ()
		{
			return sessionStorage.getItem('user');
		};

		this.destroy = function()
		{
			$http.post('api/sessions/destroy.php');
			return sessionStorage.removeItem('user');
		};
	}

})();