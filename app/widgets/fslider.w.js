(function()
{

    'use strict';

    angular
        .module('app.widgets')
        .directive('fslider', fslider);

    function fslider ()
    {
        return {
            link: link,
            restrict: 'A'
        }
    }

    function link(scope, element, attrs) {


    }

})();
