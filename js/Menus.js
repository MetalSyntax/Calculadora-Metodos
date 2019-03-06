/*Controladores*/
AppMethods.controller('inicio', ["$scope",function($scope){
    $scope.mensaje = "Methods";
}]);
AppMethods.controller('Productividad',["$scope", function($scope){
    $scope.mensaje = "Productividad";          
}]);
AppMethods.controller('Ayuda',["$scope", function($scope){
    $scope.mensaje = "Ayuda";        
}]);
/*Filtros*/ 
AppMethods.controller('filtroProductividad', ['$scope', '$http', function($scope, $http) {   
    $http.get('js/Productividad.json').success(function(Productividad){
    $scope. ItemProductividad = Productividad;
    });
}]);