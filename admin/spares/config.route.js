(function() {

    'use strict';

    angular
        .module('admin.spares')
        .config(appRun);

    appRun.$inject = ['$stateProvider'];

    function appRun($stateProvider) {
        $stateProvider
            .state('admin.interface.spares', {
                url: '',
                parent: 'admin.interface',
                templateUrl: 'admin/spares/spares.html',
                controller: 'Spares',
                params: {
                    brand: {value: null},
                    model: {value:null}
                },
                resolve: {
                    SparesCollection: function($stateParams, SparesService) {
                        return SparesService.getSpares($stateParams.brand, $stateParams.model).then(function(data){
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