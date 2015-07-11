(function() {

    'use strict';

    angular
        .module('admin.autos')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider)
    {
        $stateProvider
            .state('admin.interface.brand', {
                url: '',
                parent: 'admin.interface',
                templateUrl: 'admin/autos/autos.html',
                params: {
                  brand: {value: null},
                     id: {value: null}
                },
                controller: 'Autos',
                resolve: {
                    AutosCollection: function(AutosService, $stateParams) {
                        return AutosService.getBrandAutos($stateParams.brand).then(function (data) {
                            return data;
                        });
                    },
                    BrandInfo: function(CatalogService, $stateParams){
                        return CatalogService.getBrand($stateParams.id).then(function (data){
                            return data;
                        })
                    }
                },
                data: {
                    requireLogin: true
                }

            });
    }


})();
