app.directive('ngFocus', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            alert('t');
            element.bind('focus', function(evt) {
                alert('t');
                element.addClass('focus');
                scope.$apply(function(){
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt) {
                element.removeClass('focus');
                scope.$apply(function() {
                    ctrl.$focused = false;
                });
            });
        }
    }
});