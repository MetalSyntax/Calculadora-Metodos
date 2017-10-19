AppMethods.controller('inicio', ["$scope",function($scope){
    $scope.mensaje = "Methods";
}]);
AppMethods.controller('Productividad',["$scope", function($scope){
    $scope.mensaje = "Productividad";          
}]);
AppMethods.controller('Hombre-Maquina',["$scope", function($scope){
    $scope.mensaje = "Hombre-Maquina";         
}]);
AppMethods.controller('Balance_Lineas',["$scope", function($scope){
    $scope.mensaje = "Balance de Lineas";        
}]);
AppMethods.controller('Muestreo_trabajo',["$scope", function($scope){
    $scope.mensaje = "Muestreo de Trabajo";        
}]);
AppMethods.controller('Ayuda',["$scope", function($scope){
    $scope.mensaje = "Ayuda";        
}]);

AppMethods.controller('filtroProductividad', ['$scope', '$http', function($scope, $http) {   
    $http.get('js/Productividad.json').success(function(Productividad){
    $scope. ItemProductividad = Productividad;
    });
}]);

AppMethods.controller('filtroHombre_Maquina', ['$scope', '$http', function($scope, $http) {   
    $http.get('js/Hombre_Maquina.json').success(function(Hombre_Maquina){
    $scope. ItemHombre_Maquina = Hombre_Maquina;
    });
}]);
