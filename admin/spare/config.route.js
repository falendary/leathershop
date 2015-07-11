(function() {

    'use strict';

    angular
        .module('admin.spare')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider)
    {
        $stateProvider
            .state('admin.interface.spare', {
                url: '',
                parent: 'admin.interface',
                templateUrl: 'admin/spare/spare.html',
                controller: 'Spare',
                params: {

                },
                resolve: {

                },
                data: {
                    requireLogin: true
                }
            });
    }

})();