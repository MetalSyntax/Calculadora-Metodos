var AppFiltro = angular.module ("navegacion", []);

AppFiltro.controller('filtro', ['$scope', '$http', function($scope, $http) {

    $http.get('js/Datos.json').success(function(Datos){
        $scope.informacion = Datos;
    });
}]);