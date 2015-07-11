(function() {

    'use strict';

    angular
        .module('admin.spare')
        .controller('Spare', Spare);

    Spare.$inject = ['$scope', 'SpareInfo'];

    function Spare($scope, SpareInfo)
    {
        $scope.spare = SpareInfo;
    }

})();/**
 * Created by leguest on 11.07.15.
 */
