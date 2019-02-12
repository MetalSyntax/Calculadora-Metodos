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
    /*Hombre-Maquina*/
    $routeProvider.when('/Hombre-Maquina', {
        templateUrl: 'html/Hombre-Maquina.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Tiempo_Necesario', {
        templateUrl: 'html/Hombre_Maquina/Tiempo_Necesario.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Numero_Tecnico', {
        templateUrl: 'html/Hombre_Maquina/Numero_Tecnico.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Produccion_HM', {
        templateUrl: 'html/Hombre_Maquina/Produccion_HM.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Demanda_Aumentada', {
        templateUrl: 'html/Hombre_Maquina/Demanda_Aumentada.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Piezas_Defectuosas', {
        templateUrl: 'html/Hombre_Maquina/Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Numero_De_Hombres', {
        templateUrl: 'html/Hombre_Maquina/Numero_De_Hombres.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_Inversion', {
        templateUrl: 'html/Hombre_Maquina/Costo_Inversion.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_MO_JN', {
        templateUrl: 'html/Hombre_Maquina/Costo_MO_JN.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_MO_JE', {
        templateUrl: 'html/Hombre_Maquina/Costo_MO_JE.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_MF', {
        templateUrl: 'html/Hombre_Maquina/Costo_MF.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_MP', {
        templateUrl: 'html/Hombre_Maquina/Costo_MP.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_Piezas_Defectuosas', {
        templateUrl: 'html/Hombre_Maquina/Costo_Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Costo_Materiales', {
        templateUrl: 'html/Hombre_Maquina/Costo_Materiales.html',
        controller: 'Hombre-Maquina'
    })
    $routeProvider.when('/Depreciacion', {
        templateUrl: 'html/Hombre_Maquina/Depreciacion.html',
        controller: 'Hombre-Maquina'
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
    $routeProvider.when('/Concepto_Hombre_Maquina', {
        templateUrl: 'html/Ayuda/Concepto_Hombre_Maquina.html',
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
