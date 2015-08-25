angular.module('themeBuilder', [])
    .controller('ThemeBuilderController', function($scope) {
        var newData = [];
        for(var i = 0; i<6; i++)  {
            newData.push({title:'#000 ' + i, colors:{first:'orange', second:'red', third:'violet'}, nameColor:'orange' });
        };

        $scope.data = newData;
    }).directive('myRepeatDirective', function() {
        return function(scope, element, attrs) {
            if (scope.$last){
                console.info('Angular : This element was created in: ',new Date().getMilliseconds().toString(), 'ms');
            }
        };
    });