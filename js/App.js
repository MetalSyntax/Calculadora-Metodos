var AppMethods = angular.module('navegacion', ['ngRoute'] );

AppMethods.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'html/Pagina_Principal.html',
        controller: 'inicio'
    })
    $routeProvider.when('/pageSubmenu' , {      
        templateUrl: 'html/Pagina_Principal.html',
        controller: 'inicio'
    })
/*Productividad*/
    $routeProvider.when('/Productividad', {
        templateUrl: 'html/Productividad.html',
        controller: 'Productividad'
    })
     $routeProvider.when('/Indicadores', {
        templateUrl: 'html/1/Indicadores.html',
        controller: 'Productividad'
    })
     $routeProvider.when('/Indices', {
        templateUrl: 'html/1/Indices.html',
        controller: 'Productividad'
    })
     $routeProvider.when('/Costos_de_Produccion', {
        templateUrl: 'html/1/Costos_de_Produccion.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costos_Totales', {
        templateUrl: 'html/1/Costos_Totales.html',
        controller: 'Productividad'
    })
    $routeProvider.when('/Costo_Unitario', {
        templateUrl: 'html/1/Costo_Unitario.html',
        controller: 'Productividad'
    })
       $routeProvider.when('/Productividad_Multifactorial', {
        templateUrl: 'html/1/Productividad_Multifactorial.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Productividad_Funcion_trabajadores', {
        templateUrl: 'html/1/Productividad_Funcion_trabajadores.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Productividad_Funcion_Materiales', {
        templateUrl: 'html/1/Productividad_Funcion_Materiales.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Ganancia', {
        templateUrl: 'html/1/Ganancia.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Rentabilidad', {
        templateUrl: 'html/1/Rentabilidad.html',
        controller: 'Productividad'
    })
      $routeProvider.when('/Conversiones', {
        templateUrl: 'html/1/Conversiones.html',
        controller: 'Productividad'
    })
/*Hombre-Maquina*/
        $routeProvider.when('/Hombre-Maquina', {
        templateUrl: 'html/Hombre-Maquina.html',
        controller: 'Hombre-Maquina'
    })
          $routeProvider.when('/Tiempo_Necesario', {
        templateUrl: 'html/2/Tiempo_Necesario.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Numero_Tecnico', {
        templateUrl: 'html/2/Numero_Tecnico.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Produccion_HM', {
        templateUrl: 'html/2/Produccion_HM.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Demanda_Aumentada', {
        templateUrl: 'html/2/Demanda_Aumentada.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Piezas_Defectuosas', {
        templateUrl: 'html/2/Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Numero_De_Hombres', {
        templateUrl: 'html/2/Numero_De_Hombres.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_Inversion', {
        templateUrl: 'html/2/Costo_Inversion.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MO_JN', {
        templateUrl: 'html/2/Costo_MO_JN.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MO_JE', {
        templateUrl: 'html/2/Costo_MO_JE.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MF', {
        templateUrl: 'html/2/Costo_MF.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_MP', {
        templateUrl: 'html/2/Costo_MP.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_Piezas_Defectuosas', {
        templateUrl: 'html/2/Costo_Piezas_Defectuosas.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Costo_Materiales', {
        templateUrl: 'html/2/Costo_Materiales.html',
        controller: 'Hombre-Maquina'
    })
        $routeProvider.when('/Depreciacion', {
        templateUrl: 'html/2/Depreciacion.html',
        controller: 'Hombre-Maquina'
    })
/*Balance de Lineas*/
        $routeProvider.when('/Balance_Lineas', {
        templateUrl: 'html/Balance_Lineas.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Numero_Recursos', {
        templateUrl: 'html/3/Numero_Recursos.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Base_Equilibrio', {
        templateUrl: 'html/3/Base_Equilibrio.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Ritmo', {
        templateUrl: 'html/3/Ritmo.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Eficiencia_Linea', {
        templateUrl: 'html/3/Eficiencia_Linea.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Tiempo_extra', {
        templateUrl: 'html/3/Tiempo_extra.html',
        controller: 'Balance_Lineas'
    })
        $routeProvider.when('/Red_Precedencia', {
        templateUrl: 'html/3/Red_Precedencia.html',
        controller: 'Balance_Lineas'
    })
/*Muestreo de Trabajo*/
      $routeProvider.when('/Muestreo_trabajo', {
        templateUrl: 'html/Muestreo_trabajo.html',
        controller: 'Muestreo_trabajo'
    })
     $routeProvider.when('/Suplementos_Descanso', {
        templateUrl: 'html/4/Suplementos_Descanso.html',
        controller: 'Muestreo_trabajo'
    })
       $routeProvider.when('/Tiempo_NecesarioMT', {
        templateUrl: 'html/4/Tiempo_NecesarioMT.html',
        controller: 'Muestreo_trabajo'
    })
      $routeProvider.when('/Coeficiente_Variacion', {
        templateUrl: 'html/4/Coeficiente_Variacion.html',
        controller: 'Muestreo_trabajo'
    })
      $routeProvider.when('/Tiempo_Estandar', {
        templateUrl: 'html/4/Tiempo_Estandar.html',
        controller: 'Muestreo_trabajo'
    })
      $routeProvider.when('/Porcentaje_Descanso', {
        templateUrl: 'html/4/Porcentaje_Descanso.html',
        controller: 'Muestreo_trabajo'
    })
      $routeProvider.when('/Numero_Observaciones', {
        templateUrl: 'html/4/Numero_Observaciones.html',
        controller: 'Muestreo_trabajo'
    })
    /*Desarrollo*/
    $routeProvider.when('/Desarrollo', {
        templateUrl: 'html/5/Desarrollo.html',
        controller: 'inicio'
    })
    /*Ayuda*/
    $routeProvider.when('/Ayuda', {
        templateUrl: 'html/Ayuda.html',
        controller: 'Ayuda'
    })
      $routeProvider.when('/Concepto_Fundamentales', {
        templateUrl: 'html/5/Concepto_Fundamentales.html',
        controller: 'Ayuda'
    })
        $routeProvider.when('/Concepto_Hombre_Maquina', {
        templateUrl: 'html/5/Concepto_Hombre_Maquina.html',
        controller: 'Ayuda'
    })
         $routeProvider.when('/Concepto_Productividad', {
        templateUrl: 'html/5/Concepto_Productividad.html',
        controller: 'Ayuda'
    })
    /*Aerca de*/
    $routeProvider.when('/Acerca_de', {
        templateUrl: 'html/5/Acerca_de.html',
        controller: 'inicio'
    })
    /*Terminos y Condiciones*/
    $routeProvider.when('/Terminos', {
        templateUrl: 'html/5/Terminos.html',
        controller: 'inicio'
    })
    /*404*/
    $routeProvider.when('/404', {
        templateUrl: 'html/404.html',
        controller: 'inicio'
    })
    $routeProvider.otherwise({
        redirectTo: '/404'
    })
    
}])