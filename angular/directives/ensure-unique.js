app.directive('ensureUnique', function($http){
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function(n) {
                //console.log(scope);
                //console.log(ele);
                //console.log(attrs);
                console.log(c);
                console.log(n);
                if ( !n ) {
                    return;
                }

                $http({
                    method: 'POST',
                    url: '/api/check/' + attrs.ensureUnique,
                    data: {'field': attrs.ensureUnique}
                }).success(function(data) {
                    c.$setValidity('unique', data.isUnique);
                }).error(function(data) {
                    c.$setValidity('unique', false);
                });

            });
        }
    }
});