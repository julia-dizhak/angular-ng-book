app.controller('expressionController', function($scope, $parse) {
    $scope.$watch('expr', function(newVal, oldVal, scope) {
        if ( newVal !== oldVal ) {

            //
            var parseFun = $parse(newVal);

            $scope.parsedValue = parseFun(scope);
        }
    });
});

app.controller('interpolateController',
    ['$scope', 'EmailParser',
        function($scope, EmailParser) {
        // Set up a watch
            $scope.$watch('emailBody', function(body) {
                if (body) {
                    $scope.previewText =
                        EmailParser.parse(body, {
                            to: $scope.to
                        });
                }
            });
        }]);