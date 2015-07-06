(function(){

    'use strict';

    angular
        .module('admin.interface')
        .controller('Header', Header);

    Header.$inject = ['$scope', 'AuthService']

    function Header($scope, AuthService)
    {
        $scope.logout = function()
        {
            AuthService.logout();
        }
    }


})();