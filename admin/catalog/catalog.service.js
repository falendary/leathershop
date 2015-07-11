(function() {

    'use strict';

    angular
        .module('admin.catalog')
        .factory('CatalogService', CatalogService);

    CatalogService.$inject = ['$http', '$q', '$timeout'];

    function CatalogService ($http, $q, $timeout) {
        return {
            getBrands: function ()
            {
                var deffered = $q.defer();
                $http.get('api/auto/brands')
                    .success(function(data){
                        $timeout(function(){
                            deffered.resolve(data);
                        }, 100);

                    })
                    .error(deffered.reject);
                return deffered.promise;
            },
            getBrand: function(id) {
                var deffered = $q.defer();
                $http.get('api/auto/brands/'+id)
                    .success(function(data){
                        $timeout(function()
                        {
                            deffered.resolve(data);
                        }, 100);

                    })
                    .error(deffered.reject)
                return deffered.promise;
            }
        }
    }

})();