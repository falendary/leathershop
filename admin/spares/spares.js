(function(){

    'use strict';

    angular
        .module('admin.spares')
        .controller('Spares', Spares);

    Spares.$inject = ['$scope', 'SparesCollection'];

    function Spares($scope, SparesCollection) {
        $scope.spares = SparesCollection;
    }

})();