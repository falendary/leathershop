(function() {

    'use strict';

    angular
        .module('admin.catalog')
        .controller('Catalog', Catalog);

    Catalog.$inject = ['$scope', 'BrandsCollection'];

    function Catalog ($scope, BrandsCollection)
    {
        $scope.brands = BrandsCollection;
    }

})();