(function() {

    'use strict';

    angular
        .module('admin.catalog')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider)
    {
        $stateProvider
            .state('admin.interface.catalog',
            {
                url: '',
                parent: 'admin.interface',
                templateUrl: 'admin/catalog/catalog.html',
                controller: 'Catalog',
                data: {
                    requireLogin: true
                }
            })
    }

})();