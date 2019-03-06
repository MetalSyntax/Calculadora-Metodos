var AppMethods = angular.module('navegacion', ['ngRoute']);

AppMethods.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'html/Pagina_Principal.html',
        controller: 'inicio'
    })
    $routeProvider.when('/pageSubmenu', {
        templateUrl: 'html/Pagina_Principal.html',
        controller: 'inicio'
    })
    /*Productividad*/
    $routeProvider.when('/Productividad', {
        templateUrl: 'html/Productividad.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Indicadores', {
        templateUrl: 'html/Productividad/Indicadores.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Indices', {
        templateUrl: 'html/Productividad/Indices.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costos_de_Produccion', {
        templateUrl: 'html/Productividad/Costos_de_Produccion.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costos_Totales', {
        templateUrl: 'html/Productividad/Costos_Totales.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costo_Unitario', {
        templateUrl: 'html/Productividad/Costo_Unitario.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Productividad_Multifactorial', {
        templateUrl: 'html/Productividad/Productividad_Multifactorial.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Productividad_Funcion_trabajadores', {
        templateUrl: 'html/Productividad/Productividad_Funcion_trabajadores.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Productividad_Funcion_Materiales', {
        templateUrl: 'html/Productividad/Productividad_Funcion_Materiales.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Ganancia', {
        templateUrl: 'html/Productividad/Ganancia.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Rentabilidad', {
        templateUrl: 'html/Productividad/Rentabilidad.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Conversiones', {
        templateUrl: 'html/Productividad/Conversiones.html',
        controller: 'Productividad'
    })
    /*Ayuda*/
    $routeProvider.when('/Ayuda', {
        templateUrl: 'html/Ayuda.html',
        controller: 'Ayuda'
    })
    $routeProvider.when('/Concepto_Fundamentales', {
        templateUrl: 'html/Ayuda/Concepto_Fundamentales.html',
        controller: 'Ayuda'
    })
    $routeProvider.when('/Concepto_Productividad', {
        templateUrl: 'html/Ayuda/Concepto_Productividad.html',
        controller: 'Ayuda'
    })
    /*Acerca de*/
    $routeProvider.when('/Acerca_de', {
        templateUrl: 'html/Ayuda/Acerca_de.html',
        controller: 'inicio'
    })
    /*Terminos y Condiciones*/
    $routeProvider.when('/Terminos', {
        templateUrl: 'html/Ayuda/Terminos.html',
        controller: 'inicio'
    })
}]);