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