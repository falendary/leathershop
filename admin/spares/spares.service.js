(function() {

    'use strict';

    angular
        .module('admin.spares')
        .factory('SparesService', SparesService);

    SparesService.$inject = ['$http', '$q', '$timeout'];

    function SparesService($http, $q, $timeout) {
        return {
            getSpares: function(brand, model) {
                var deffered = $q.defer();
                $http.get('api/auto/models/'+brand+'/'+model)
                    .success(function(data){
                        $timeout(function(){
                            deffered.resolve(data);
                        }, 100);
                    })
                    .error(deffered.reject);
                return deffered.promise;
            },
            getSpare: function(brand, model, id) {
                var deffered = $q.defer();
                $http.get('api/auto/models/'+brand+'/'+model+'/'+id)
                    .success(function(data){
                        $timeout(function(){
                            deffered.resolve(data);
                        }, 100);
                    })
                    .error(deffered.reject);
                return deffered.promise;
            }
        }
    }

})();