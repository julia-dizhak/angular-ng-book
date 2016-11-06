var app = angular.module('expressionApp', [])
    .config(['$interpolateProvider',
        function($interpolateProvider){
            $interpolateProvider.startSymbol('__');
            $interpolateProvider.endSymbol('__');
        }
    ]);

