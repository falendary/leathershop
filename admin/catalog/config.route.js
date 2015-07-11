(function() {

    'use strict';

    angular
        .module('admin.catalog')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider) {
        $stateProvider
            .state('admin.interface.catalog', {
                url: '',
                parent: 'admin.interface',
                controller: 'Catalog',
                templateUrl: 'admin/catalog/catalog.html',
                resolve: {
                    BrandsCollection: function(CatalogService)
                    {
                        return CatalogService.getBrands().then(function(data) {
                            return data;
                        }, function(err)
                        {
                            console.log(Error + err);
                        })
                    }
                },
                data: {
                    requireLogin: true
                }
            });
    }

})();