// example 1
app.controller('hierarchyController', function($scope) {
    $scope.counter = 0;

    $scope.add = function(amount) {
        amount = 1;
        $scope.counter += amount;
    };
    $scope.subtract = function(amount) {
        amount = 1;
        $scope.counter -= amount;
    };

    $scope.person = {
        name: 'Julia',
        surname: 'Dizhak'
    }
});

//example 2

app.controller('ParentController', function($scope) {
    $scope.person = { greeted: false};
});

app.controller('ChildController', function($scope) {
    $scope.sayHello = function() {
        $scope.person.name = 'Julia Dizhak';
        $scope.person.greeted = true;
    };
});
