/*******************************************************/
/*Costos Totales*/
/*******************************************************/
function Costos_Totales() {
	Sumatoria_Costos = 0
	$(".Costos_Totales_Datos").each(function(index, value) {
			Sumatoria_Costos = Sumatoria_Costos + eval($(this).val());
		});
	$("#Costo_Total_Resultado").val(Sumatoria_Costos); 
    
/*Informacion Guardada*/
var Costos_Totales_Clave = "Sumatoria de los Costos";
var Costos_Totales_Valor = document.getElementById("Costo_Total_Resultado").value;
localStorage.setItem(Costos_Totales_Clave, Costos_Totales_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Costos_Totales(Costos_Totales_Clave){
    var Zona_datos_Costos_Totales = document.getElementById("Zona_datos_Costos_Totales");
    var Valor_Costos_Totales = localStorage.getItem(Costos_Totales_Clave);
    Zona_datos_Costos_Totales.innerHTML = "";
    for (i=0;i<localStorage.length;i++){
        var Costos_Totales_Clave = localStorage.key(i);
        var Valor_Costos_Totales = localStorage.getItem(Costos_Totales_Clave);
        Zona_datos_Costos_Totales.innerHTML += '<div> Datos: '+Costos_Totales_Clave+' -- '+ 'Resultado: '+Valor_Costos_Totales+' $ '+'<input type="button" onclick="Eliminar_Item_Costos_Totales(\''+ Costos_Totales_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Costos_Totales(){
    Leer_Costos_Totales();
}
/*Borrar Historial*/
function Borrar_Costos_Totales(){
        localStorage.clear();
        Leer_Costos_Totales();
}
/*Borrar Item*/
function Eliminar_Item_Costos_Totales(Costos_Totales_Clave){
    localStorage.removeItem(Costos_Totales_Clave);
     Leer_Costos_Totales();
}
/*Linea Nueva*/
function Nueva_Linea_Costo() {
	$("#Costos_Linea").append('<input type="number" class="Costos_Totales_Datos" value="0"/><br/>');
}
/*Borrar*/
function Borrar_Linea_Costo(){
    $("#Costos_Linea").empty('<input type="number" class="Costos_Totales_Datos" value="0">/><br/>');
}
/*Totales*/
function Limpiar_costos() {
    document.getElementById("costos").reset();
}
/*******************************************************/
/*Costo Unitario*/
/*******************************************************/
function Costo_Unitario_Prod(){
	Total_Unidades = 0
	Costo_Total = 0
	$("#Unidades_U").each(function(index,value){
		Total_Unidades = Total_Unidades + eval($(this).val());
	});
	$("#Costo_Total_U").each(function(index,value){
		Costo_Total = Costo_Total + eval($(this).val());
	});
    cu = Costo_Total / Total_Unidades
    dcu = cu.toFixed(4)
	$("#Costo_Unitario").val(dcu);
    
/*Informacion Guardada*/
var Costo_Unitario_Clave = "Costo Total = "+document.getElementById("Costo_Total_U").value+"  "+document.getElementById("Moneda_Total").value+" Unidades "+document.getElementById("Unidades_U").value+"   "+document.getElementById("Tipo_Unidad_U").value;
var Costo_Unitario_Valor = document.getElementById("Costo_Unitario").value;
localStorage.setItem(Costo_Unitario_Clave, Costo_Unitario_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Costo_Unitario(Costo_Unitario_Clave){
    
    var Zona_datos_Costo_Unitario = document.getElementById("Zona_datos_Costo_Unitario");
    var Valor_Costo_Unitario = localStorage.getItem(Costo_Unitario_Clave);
    Zona_datos_Costo_Unitario.innerHTML = "";
    for (i=0;i<localStorage.length;i++){ 
        var Costo_Unitario_Clave = localStorage.key(i);
        var Valor_Costo_Unitario = localStorage.getItem(Costo_Unitario_Clave);
        Zona_datos_Costo_Unitario.innerHTML += '<div> Datos: '+Costo_Unitario_Clave+' -- '+ 'Resultado: '+Valor_Costo_Unitario+' $ '+'<input type="button" onclick="Eliminar_Item_Costo_Unitario(\''+ Costo_Unitario_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Costo_Unitario(){
    Leer_Costo_Unitario();
}
/*Borrar Historial*/
function Borrar_Costo_Unitario(){
        localStorage.clear();
        Leer_Costo_Unitario();
}
/*Borrar Item*/
function Eliminar_Item_Costo_Unitario(Costo_Unitario_Clave){
    localStorage.removeItem(Costo_Unitario_Clave);
     Leer_Costo_Unitario();
}
/*Unitarios*/
function Limpiar_costo() {
    document.getElementById("Unitario").reset();
}
/*******************************************************/
/*Costos de Produccion*/
/*******************************************************/
function Costos_de_Produccion(){
	Material = 0
	Costo = 0
	$("#MaterialP").each(function(index,value){
		Material = Material + eval($(this).val());
	});
	$("#CostoP").each(function(index,value){
		Costo = Costo + eval($(this).val());
	});
    produccion = Math.round (Material * Costo)
	$("#ResultadoP").val(produccion);
    
/*Informacion Guardada*/
var Costo_Produccion_Clave = "Material = "+document.getElementById("MaterialP").value+" "+document.getElementById("Tipo_Unidad3").value+" Costo = "+document.getElementById("CostoP").value+" "+document.getElementById("Tipo_Material2").value;
var Costo_Produccion_Valor = document.getElementById("ResultadoP").value;
localStorage.setItem(Costo_Produccion_Clave, Costo_Produccion_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Costo_Produccion(Costo_Produccion_Clave){
    
    var Zona_datos_Costo_Produccion = document.getElementById("Zona_datos_Costo_Produccion");
    var Valor_Costo_Produccion = localStorage.getItem(Costo_Produccion_Clave);
    Zona_datos_Costo_Produccion.innerHTML = "";
    for (i=0;i<localStorage.length;i++){ 
        var Costo_Produccion_Clave = localStorage.key(i);
        var Valor_Costo_Produccion = localStorage.getItem(Costo_Produccion_Clave);
        Zona_datos_Costo_Produccion.innerHTML += '<div> Datos: '+Costo_Produccion_Clave+' -- '+ 'Resultado: '+Valor_Costo_Produccion+' $ '+'<input type="button" onclick="Eliminar_Item_Costo_Produccion(\''+ Costo_Produccion_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Costo_Produccion(){
    Leer_Costo_Produccion();
}
/*Borrar Historial*/
function Borrar_Costo_Produccion(){
        localStorage.clear();
        Leer_Costo_Produccion();
}
/*Borrar Item*/
function Eliminar_Item_Costo_Produccion(Costo_Produccion_Clave){
    localStorage.removeItem(Costo_Produccion_Clave);
     Leer_Costo_Produccion();
}
/*Produccion*/
function Limpiar_prod() {
    document.getElementById("Produccion").reset();
}
/*******************************************************/
/*Ganancia*/
/*******************************************************/
function Ganancia_R(){
	pvp = 0
	Costo_unitario = 0
	$("#pvp").each(function(index,value){
		pvp = pvp + eval($(this).val());
	});
	$("#Costo_unitario").each(function(index,value){
		Costo_unitario = Costo_unitario + eval($(this).val());
	});
    if (pvp>Costo_unitario){
    var ganancia = "Ganancia = ";
    } else {
    var ganancia = "Perdida = ";
    }
	$("#ResultadoG").val(Math.round (pvp - Costo_unitario));

/*Informacion Guardada*/
var Ganancia_Clave = "Costo Unitario = "+document.getElementById("Costo_unitario").value+" Precio de Venta al Publico = "+document.getElementById("pvp").value;
var Ganancia_Valor = document.getElementById("ResultadoG").value;
localStorage.setItem(Ganancia_Clave, Ganancia_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Ganancia(Ganancia_Clave){
    
    var Zona_datos_Ganancia = document.getElementById("Zona_datos_Ganancia");
    var Valor_Ganancia = localStorage.getItem(Ganancia_Clave);
    Zona_datos_Ganancia.innerHTML = "";
    for (i=0;i<localStorage.length;i++){ 
        var Ganancia_Clave = localStorage.key(i);
        var Valor_Ganancia = localStorage.getItem(Ganancia_Clave);
        Zona_datos_Ganancia.innerHTML += '<div> Datos: '+Ganancia_Clave+' -- '+ 'Resultado: '+Valor_Ganancia+' $ '+'<input type="button" onclick="Eliminar_Item_Ganancia(\''+ Ganancia_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Ganancia(){
    Leer_Ganancia();
}
/*Borrar Historial*/
function Borrar_Ganancia(){
        localStorage.clear();
        Leer_Ganancia();
}
/*Borrar Item*/
function Eliminar_Item_Ganancia(Ganancia_Clave){
    localStorage.removeItem(Ganancia_Clave);
     Leer_Ganancia();
}
/*Ganancia*/
function Limpiar_ganancia() {
    document.getElementById("ganancia").reset();
}
/*******************************************************/
/*Homogenizar las Unidades*/
/*******************************************************/
function Homogenizar_Multiplicando() {
	Numero_de_Unidades = 1
	$(".Numero_de_Unidades").each(
		function(index, value) {
			Numero_de_Unidades = Numero_de_Unidades * eval($(this).val());
		});
	$("#Resultado_Multi").val(Numero_de_Unidades);
    
/*Informacion Guardada*/
var Homogenizar_Clave = "Sumatoria de los datos";
var Homogenizar_Valor = document.getElementById("Resultado_Multi").value;
localStorage.setItem(Homogenizar_Clave, Homogenizar_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Homogenizar(Homogenizar_Clave){
    var Zona_datos_Homogenizar = document.getElementById("Zona_datos_Homogenizar");
    var Valor_Homogenizar = localStorage.getItem(Homogenizar_Clave);
    Zona_datos_Homogenizar.innerHTML = "";
    for (i=0;i<localStorage.length;i++){
        var Homogenizar_Clave = localStorage.key(i);
        var Valor_Homogenizar = localStorage.getItem(Homogenizar_Clave);
        Zona_datos_Homogenizar.innerHTML += '<div> Datos: '+Homogenizar_Clave+' -- '+ 'Resultado: '+Valor_Homogenizar+'<input type="button" onclick="Eliminar_Item_Homogenizar(\''+ Homogenizar_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Homogenizar(){
    Leer_Homogenizar();
}
/*Borrar Historial*/
function Borrar_Homogenizar(){
        localStorage.clear();
        Leer_Homogenizar();
}
/*Borrar Item*/
function Eliminar_Item_Homogenizar(Homogenizar_Clave){
    localStorage.removeItem(Homogenizar_Clave);
     Leer_Homogenizar();
}
/*Linea Nueva*/
function Nueva_Linea_Homogenizar() {
	$("#Transformaciones").append('<input type="number" class="Numero_de_Unidades" value="0"/><br/>');   
}
/*Borrar*/
function Borrar_Linea_Homogenizar(){
    $("#Transformaciones").empty('<input type="number" class="Numero_de_Unidades" value="0">/><br/>');
}
/*Homogenizar Unidades*/
function Limpiar_Homogenizar() {
    document.getElementById("trans").reset();
}
/*******************************************************/
/*Indicadores*/
/*******************************************************/
document.getElementById("Calcular_Indicadores").addEventListener("click", Indicadores);
function Indicadores(){
	Mes = 0
	Material = 0
	$("#Mes").each(function(index,value){
		Mes = Mes + eval($(this).val());
	});
	$("#MaterialI").each(function(index,value){
		Material = Material + eval($(this).val());
	});
	$("#ResultadoI").val(Mes / Material);
    
/*Informacion Guardada*/
var Indicadores_Clave = "Costo Unitario = "+document.getElementById("Costo_unitario").value+" Precio de Venta al Publico = "+document.getElementById("pvp").value;
var Ganancia_Valor = document.getElementById("ResultadoG").value;
localStorage.setItem(Ganancia_Clave, Ganancia_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Ganancia(Ganancia_Clave){
    
    var Zona_datos_Ganancia = document.getElementById("Zona_datos_Ganancia");
    var Valor_Ganancia = localStorage.getItem(Ganancia_Clave);
    Zona_datos_Ganancia.innerHTML = "";
    for (i=0;i<localStorage.length;i++){ 
        var Ganancia_Clave = localStorage.key(i);
        var Valor_Ganancia = localStorage.getItem(Ganancia_Clave);
        Zona_datos_Ganancia.innerHTML += '<div> Datos: '+Ganancia_Clave+' -- '+ 'Resultado: '+Valor_Ganancia+' $ '+'<input type="button" onclick="Eliminar_Item_Ganancia(\''+ Ganancia_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Ganancia(){
    Leer_Ganancia();
}
/*Borrar Historial*/
function Borrar_Ganancia(){
        localStorage.clear();
        Leer_Ganancia();
}
/*Borrar Item*/
function Eliminar_Item_Ganancia(Ganancia_Clave){
    localStorage.removeItem(Ganancia_Clave);
     Leer_Ganancia();
}
/*Indicadores*/
document.getElementById("Limpiar_indicadores").addEventListener("click", Limpiar_indicadores);
function Limpiar_indicadores() {
    document.getElementById("indicadores").reset();
}
/*******************************************************/
/*Indices*/
/*******************************************************/
document.getElementById("Calcular_Indices").addEventListener("click", Indices);
function Indices(){
	Estudio = 0
	Base = 0
	$("#Estudio").each(function(index,value){
		Estudio = Estudio + eval($(this).val());
	});
	$("#Base").each(function(index,value){
		Base = Base + eval($(this).val());
	});
    indice_p = (Estudio / Base)*100
    indice_R = (indice_p - 100)
    if (indice_p>100){
    var indice = " Aumento"
    } else {
    var indice = " Disminucion"
    }
	$("#ResultadoIN").val(indice_p);
    $("#ResultadoPOR").val(indice_R);
}
/*Indices*/
document.getElementById("Limpiar_indices").addEventListener("click", Limpiar_indices);
function Limpiar_indices() {
    document.getElementById("indices").reset();
}
/*******************************************************/
/*Productividad en Funcion de los Trabajadores*/
/*******************************************************/
function Productividad_FT(){
	total_unidades = 0
	total_trabajadores = 0
	$("#UnidadesT").each(function(index,value){
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Trabajadores").each(function(index,value){
		total_trabajadores = total_trabajadores + eval($(this).val());
	});
    ttf = total_unidades / total_trabajadores
    cttf = ttf.toFixed(4)
	$("#Total_FT").val(cttf);
    
/*Informacion Guardada*/
var Productividad_FT_Clave = "Unidades = "+document.getElementById("UnidadesT").value+" "+document.getElementById("Tipo_UnidadT").value+" -- Trabajadores = "+document.getElementById("Trabajadores").value;
var Productividad_FT_Valor = document.getElementById("Total_FT").value;
localStorage.setItem(Productividad_FT_Clave, Productividad_FT_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Productividad_FT(Productividad_FT_Clave){
    var Zona_datos_Productividad_FT = document.getElementById("Zona_datos_Productividad_FT");
    
    var Valor_Productividad_FT = localStorage.getItem(Productividad_FT_Clave);
    Zona_datos_Productividad_FT.innerHTML = "";
    
    for (i=0;i<localStorage.length;i++){
        var Productividad_FT_Clave = localStorage.key(i);
        var Valor_Productividad_FT = localStorage.getItem(Productividad_FT_Clave);
        Zona_datos_Productividad_FT.innerHTML += '<div> Datos: '+Productividad_FT_Clave+' -- '+ 'Resultado: '+Valor_Productividad_FT+'<input type="button" onclick="Eliminar_Item_Productividad_FT(\''+ Productividad_FT_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Productividad_FT(){
    Leer_Productividad_FT();
}
/*Borrar Historial*/
function Borrar_Productividad_Trabajadores(){
        localStorage.clear();
        Leer_Productividad_FT();
}
/*Borrar Item*/
function Eliminar_Item_Productividad_FT(Productividad_FT_Clave){
    localStorage.removeItem(Productividad_FT_Clave);
     Leer_Productividad_FT();
}
/*Limpiar Productividad en Funcion de los Trabajadores*/
function Limpiar_Trabajadores() {
    document.getElementById("Trabajadores1").reset();
}
/*******************************************************/
/*Productividad en Funcion de los Materiales*/
/*******************************************************/
function Productividad_FM(){
	total_unidades = 0
	total_materiales = 0
    total = 0
	$("#UnidadesM").each(function(index,value){
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Materiales").each(function(index,value){
		total_materiales = total_materiales + eval($(this).val());
	});
    total = (total_unidades / (total_unidades / total_materiales))
	$("#TotalPM").val(total);
    
/*Informacion Guardada*/
var Productividad_FM_Clave = "Unidades = "+document.getElementById("UnidadesM").value+" "+document.getElementById("Tipo_Unidad").value+" -- Materiales = "+document.getElementById("Materiales").value+" "+document.getElementById("Tipo_Material").value;

var Productividad_FM_Valor = document.getElementById("TotalPM").value;
localStorage.setItem(Productividad_FM_Clave, Productividad_FM_Valor);
}
/*Leer Informacion Guardada*/
function Leer_Productividad_FM(Productividad_FM_Clave){
    var Zona_datos_Productividad_FM = document.getElementById("Zona_datos_Productividad_FM");
    
    var Valor_Productividad_FM = localStorage.getItem(Productividad_FM_Clave);
    Zona_datos_Productividad_FM.innerHTML = "";
    
    for (i=0;i<localStorage.length;i++){
        var Productividad_FM_Clave = localStorage.key(i);
        var Valor_Productividad_FM = localStorage.getItem(Productividad_FM_Clave);
        Zona_datos_Productividad_FM.innerHTML += '<div> Datos: '+Productividad_FM_Clave+' -- '+ 'Resultado: '+Valor_Productividad_FM+'<input type="button" onclick="Eliminar_Item_Productividad_FM(\''+ Productividad_FM_Clave + '\')" value="X"></div>';
    }   
}
/*Mostrar Historial*/
function Mostrar_Productividad_FM(){
    Leer_Productividad_FM();
}
/*Borrar Historial*/
function Borrar_Productividad_Materiales(){
    if(confirm("Desea borrar el historial?")){
        localStorage.clear();
        Leer_Productividad_FM();
    }
}
/*Borrar Item*/
function Eliminar_Item_Productividad_FM(Productividad_FM_Clave){
    localStorage.removeItem(Productividad_FM_Clave);
     Leer_Productividad_FM();
}
/*Limpiar Productividad en Funcion de los Materiales*/
function Limpiar_Materiales() {
    document.getElementById("Materiales1").reset();
}
/*******************************************************/
/*Productividad Multifactorial*/
/*******************************************************/
document.getElementById("Calcular_Productividad").addEventListener("click", Productividad);
function Productividad(){
	total_unidades = 0
	Costo_Total = 0
	$("#Unidades").each(function(index,value){
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Costo_Total").each(function(index,value){
		Costo_Total = Costo_Total + eval($(this).val());
	});
	$("#Resultado").val(total_unidades / Costo_Total);
}
/*Productividad*/
function Limpiar_produc() {
    document.getElementById("Productividad").reset();
}
/*******************************************************/
/*Rentabilidad*/
/*******************************************************/
document.getElementById("Calcular_Rentabilidad").addEventListener("click", Rentabilidad);
function Rentabilidad(){
	pvp1 = 0
	Costo_unitario1 = 0
	$("#pvp1").each(function(index,value){
		pvp1 = pvp1 + eval($(this).val());
	});
	$("#Costo_unitario1").each(function(index,value){
		Costo_unitario1 = Costo_unitario1 + eval($(this).val());
	});
	$("#ResultadoR").val(Math.round ((pvp1 / Costo_unitario1) * 100));
}

/*Rentabilidad*/
document.getElementById("Limpiar_rentabilidad").addEventListener("click", Limpiar_rentabilidad);
function Limpiar_rentabilidad() {
    document.getElementById("rentabilidad").reset();
}