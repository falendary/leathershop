(function() {

    'use strict';

    angular
        .module('admin.autos')
        .factory('AutosService', AutosService);

    AutosService.$inject = ['$http', '$q', '$timeout'];

    function AutosService($http, $q, $timeout) {
        return {
            getBrandAutos: function(name)
            {
                var deffered = $q.defer();
                $http.get('api/auto/models/'+name)
                    .success(function(data){
                        $timeout(function(){
                            deffered.resolve(data);
                        }, 100)
                    })
                    .error(deffered.reject);
                return deffered.promise;
            }

        }
    }

})();