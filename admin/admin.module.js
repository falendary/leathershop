(function () {

	'use strict';
	
	angular
		.module('admin', [

			'admin.constants',
			'admin.core',
			'admin.auth',
			'admin.interface',
			'admin.dashboard',
			'admin.catalog',
			'admin.autos',
			'admin.spares',
			'admin.spare'

			])
		.run(Init);

	Init.$inject = ['$rootScope', '$state', 'AUTH_EVENTS', 'AuthService'];

	function Init($rootScope, $state, AUTH_EVENTS, AuthService)
	{
		$rootScope.$state = $state;

		$rootScope.$on('$stateChangeStart', $stateChangeStart);

		function $stateChangeStart(event, toState, toParams, fromState, fromParams)
		{

			AuthService.isAuthenticated()
				.then(function (msg)
				{
					//Если не авторизированы
					if(!msg.data) {
						// То отправляем на авторизацию
						$state.go('admin.auth.login');
					//	Если да, то на дэшборд
					} else {
						// Машрутизация после авторизации
						if (fromState.parent != 'admin.interface') {
							$state.go('admin.interface.dashboard');
						}
					}
				});

		}

	}

})();