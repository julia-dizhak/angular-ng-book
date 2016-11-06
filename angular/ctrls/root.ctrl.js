//app.controller('rootController', function($scope, $rootscope) {
app.controller('rootController', function($scope) {
    $scope.name = "Julia";
    $scope.surname = "Dizhak";

    //$scope.name2 = $rootscope + $scope.name + $scope.surname;
});

app.controller('ParentController', function($scope) {
   $scope.parentProperty = 'parent scope';
}).controller('ChildController', function($scope) {
    $scope.childProperty = 'child scope';

    $scope.fullSentenceFromChild = 'Same $scope: we can access: ' +
        $scope.rootProperty + ' and ' +
        $scope.parentProperty + ' and ' +
        $scope.childProperty;
});
