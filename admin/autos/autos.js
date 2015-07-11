(function() {

    'use strict';

    angular
        .module('admin.autos')
        .controller('Autos', Autos);

    Autos.$inject = ['$scope', 'AutosCollection', 'BrandInfo'];

    function Autos ($scope, AutosCollection, BrandInfo){

        $scope.autos = AutosCollection;
        $scope.brand = BrandInfo;

    }

})();