var app = angular.module('rootApp', [])
    .run(function($rootScope) {
        // first example
       $rootScope.name = "World";

        // second example
        // use .run to access $rootScope
        $rootScope.rootProperty = 'root scope';
    });
