app.directive('firstDirective', function() {
    return {
        restrict: 'AEC',
        replace: 'true',
        scope: {
            //linkUrl: 'needs to be set',
            //linkUrl: '@',
            //linkUrl: '@someAttr',
            linkUrl: '=someAttr',
            text: '@'
        },
        //template: '<a href="{{ linkUrl }}">{{ text }}</a>',
        template: [
            '<div>',
            '<label>My field</label>',
            '<input type="text" placeholder="enter url ..." ng-model="linkUrl">',
            '<a href="{{ linkUrl }}">{{ text }}</a>',
            '</div>'
        ].join('')
    }
});
