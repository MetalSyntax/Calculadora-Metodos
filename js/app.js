var AppMethods = angular.module('navegacion', ['ngRoute'] );

AppMethods.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'html/Pagina_Principal.html',
        controller: 'inicio'
    })
/*Productividad*/
    $routeProvider.when('/Productividad', {
        templateUrl: 'html/Productividad.html',
        controller: 'Productividad'
    })
     $routeProvider.when('/Indicadores', {
        templateUrl: 'html/Indicadores.html',
        controller: 'Productividad'
    })
     $routeProvider.when('/Indices', {
        templateUrl: 'html/Indices.html',
        controller: 'Productividad'
    })
     $routeProvider.when('/Costos_de_Produccion', {
        templateUrl: 'html/Costos_de_Produccion.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costos_Totales', {
        templateUrl: 'html/Costos_Totales.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costo_Unitario', {
        templateUrl: 'html/Costo_Unitario.html',
        controller: 'Productividad'
    })
       $routeProvider.when('/Productividad_Multifactorial', {
        templateUrl: 'html/Productividad_Multifactorial.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Productividad_Funcion_trabajadores', {
        templateUrl: 'html/Productividad_Funcion_trabajadores.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Productividad_Funcion_Materiales', {
        templateUrl: 'html/Productividad_Funcion_Materiales.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Ganancia', {
        templateUrl: 'html/Ganancia.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Rentabilidad', {
        templateUrl: 'html/Rentabilidad.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Conversiones', {
        templateUrl: 'html/Conversiones.html',
        controller: 'Productividad'
    })
/*Hombre-Maquina*/
        $routeProvider.when('/Hombre-Maquina', {
        templateUrl: 'html/Hombre-Maquina.html',
        controller: 'Hombre-Maquina'
    })
          $routeProvider.when('/Tiempo_Necesario', {
        templateUrl: 'html/Tiempo_Necesario.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Numero_Tecnico', {
        templateUrl: 'html/Numero_Tecnico.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Produccion_HM', {
        templateUrl: 'html/Produccion_HM.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Demanda_Aumentada', {
        templateUrl: 'html/Demanda_Aumentada.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Piezas_Defectuosas', {
        templateUrl: 'html/Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Numero_De_Hombres', {
        templateUrl: 'html/Numero_De_Hombres.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_Inversion', {
        templateUrl: 'html/Costo_Inversion.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MO_JN', {
        templateUrl: 'html/Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MO_JE', {
        templateUrl: 'html/Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MF', {
        templateUrl: 'html/Costo_MF.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MP', {
        templateUrl: 'html/Costo_MP.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_Piezas_Defectuosas', {
        templateUrl: 'html/Costo_Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_Materiales', {
        templateUrl: 'html/Costo_Materiales.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Depreciación', {
        templateUrl: 'html/Depreciación.html',
        controller: 'Hombre-Maquina'
    })
/*Balance de Lineas*/
        $routeProvider.when('/Balance_Lineas', {
        templateUrl: 'html/Balance_Lineas.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Numero_Recursos', {
        templateUrl: 'html/Numero_Recursos.html',
        controller: 'Balance_Lineas'
    })
    /*Desarrollo*/
    $routeProvider.when('/Desarrollo', {
        templateUrl: 'html/Desarrollo.html',
        controller: 'inicio'
    })
    /*Ayuda*/
    $routeProvider.when('/Ayuda', {
        templateUrl: 'html/Ayuda.html',
        controller: 'Ayuda'
    })
      $routeProvider.when('/Concepto_Fundamentales', {
        templateUrl: 'html/Concepto_Fundamentales.html',
        controller: 'Ayuda'
    })
        $routeProvider.when('/Concepto_Hombre_Maquina', {
        templateUrl: 'html/Concepto_Hombre_Maquina.html',
        controller: 'Ayuda'
    })
         $routeProvider.when('/Concepto_Productividad', {
        templateUrl: 'html/Concepto_Productividad.html',
        controller: 'Ayuda'
    })
        $routeProvider.when('/Leyenda_Prod', {
        templateUrl: 'html/Leyenda_Prod.html',
        controller: 'Ayuda'
    })
    /*Aerca de*/
    $routeProvider.when('/Acerca_de', {
        templateUrl: 'html/Acerca_de.html',
        controller: 'inicio'
    })
    /*Terminos y Condiciones*/
    $routeProvider.when('/Terminos', {
        templateUrl: 'html/Terminos.html',
        controller: 'inicio'
    })
    $routeProvider.when('/404', {
        templateUrl: 'html/404.html',
        controller: 'inicio'
    })
    $routeProvider.otherwise({
        redirectTo: '/404'
    })
    
}])

