app.factory('emailParser', ['$interpolate',
    function($interpolate){
        return {
            parse: function(text, context) {
                var template = $interpolate(text);
                return template(context);
            }
        }
    }]);