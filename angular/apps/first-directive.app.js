var app = angular.module('directiveApp', [])
    .run(function($rootScope, $timeout){
        $rootScope.isDisabled = true;
        //console.log($rootScope.isDisabled);

        $timeout(function(){
           $rootScope.isDisabled = false;
           //console.log($rootScope.isDisabled);
        }, 5000)
    });
