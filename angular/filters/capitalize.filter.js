app.filter('capitalize', function() {
    return function(input) {
      if ( input ) {
            return input[0].toUpperCase() + input.slice(1) + input[input.length-1].toUpperCase();
        }
    };
});
