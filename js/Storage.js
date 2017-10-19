angular.module("localStorage",["ngStorage"])
.controller("Costo_Inv", function($scope, $localStorage){
    
    $scope.Calcular_Costo_Inv = function(){
        $localStorage.resul_inv = $scope.resul_inv
    }   
    $scope.Historial_Costo_Inv = function(){
        $scope.Zona_datos_Costo_Inversion = $localStorage.resul_inv
    }  
    
})