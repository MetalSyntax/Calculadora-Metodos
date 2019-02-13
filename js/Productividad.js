/*******************************************************/
/*Costos de Produccion*/
/*******************************************************/
function Costos_de_Produc(){
	var Material = 0
	var Costo = 0
	$("#MaterialP").each(function(){
		Material = Material + eval($(this).val());
	});
	$("#CostoP").each(function(){
		Costo = Costo + eval($(this).val());
	});
    produccion = Math.round (Material * Costo)
	$("#ResultadoP").val(produccion); 

	Guardar_Historial_Costo_Produccion();
}

function Guardar_Historial_Costo_Produccion(){
/*Obtencion de Datos*/
	var Material_Costos_Produccion = $("#MaterialP").val();
	var Costo_Costos_Produccion = $("#CostoP").val();
	var Resultado_Costos_Produccion = $("#ResultadoP").val();
	var Arr_Costo_Produccion = [Material_Costos_Produccion, Costo_Costos_Produccion, Resultado_Costos_Produccion]
/*Guardar datos en un Arreglo*/
	localStorage.setItem('Costo_Produccion',JSON.stringify(Arr_Costo_Produccion))
}

function Mostrar_Costo_Produc(){
/*Obtener datos almacenados*/
	$('#Historial_Vacio').hide();
	var Arr_Costo_Produccion = localStorage.getItem('Costo_Produccion');
	Arr_Costo_Produccion = JSON.parse(Arr_Costo_Produccion);
/*Mostrar datos almacenados*/
	$("#Mat_Cos_Pro").html("Material = " + Arr_Costo_Produccion[0]);
	$("#Cos_Cos_Pro").html("Costo = " + Arr_Costo_Produccion[1]);
	$("#Resultado_Cos_Pro").html("Resultado = " + Arr_Costo_Produccion[2]);
	$('#Datos_Costo_Produccion').show();
}

function Borrar_Costo_Produc(){  
	$('#Datos_Costo_Produccion').hide();
	localStorage.removeItem('Costo_Produccion');
	localStorage.clear();
/*Limpiar datos almacenados*/       
	$('#Mat_Cos_Pro').html = "";
	$('#Cos_Cos_Pro').html = "";
	$('#Resultado_Cos_Pro').html = "";
	/*location.reload();*/
}

/*Limpieza de Costo de Produccion*/
function Limpiar_prod() {
	document.getElementById("Produccion").reset();
}
/*******************************************************/
/*Costos Totales*/
/*******************************************************/
function Costos_Totales() {
	Sumatoria_Costos = 0
	$(".Costos_Totales_Datos").each(function() {
			Sumatoria_Costos = Sumatoria_Costos + eval($(this).val());
		});
	$("#Costo_Total_Resultado").val(Sumatoria_Costos); 
    Guardar_Datos_Costos_Totales();
}

function Guardar_Datos_Costos_Totales(){
/*Obtencion de Datos*/
	var Costo_Total_Resultado = $("#Costo_Total_Resultado").val();
/*Guardando los datos en el LocalStorage*/ 
	localStorage.setItem("Costo_Total_Resultado", Costo_Total_Resultado)
}

function Mostrar_Costos_Totales(){
/*Obtener datos almacenados*/
	$('#Historial_Vacio').hide();
	var Resul_Cos_To = localStorage.getItem("Costo_Total_Resultado")
/*Mostrar datos almacenados*/
	$("#Resul_Cos_To").html("Resultado = " + Resul_Cos_To);
	$('#Datos_Costo_Totales').show();
}

function Borrar_Costo_Totales(){  
	localStorage.removeItem("Costo_Total_Resultado");
/*Limpiar datos almacenados*/       
	document.getElementById('Resul_Cos_To').innerHTML = "";
	location.reload();
}
/*Crear Linea de Costos*/
function Nueva_Linea_Costo() {
	$("#Costos_Linea").append('<input type="number" class="Costos_Totales_Datos" value="0"/><br/>');
}
/*Borrar Linea de Costos*/
function Borrar_Linea_Costo(){
	$("#Costos_Linea").empty('<input type="number" class="Costos_Totales_Datos" value="0">/><br/>');
}
/*Limpieza de Costos Totales*/
function Limpiar_costos() {
	document.getElementById("costos").reset();
}
/*******************************************************/
/*Costo Unitario*/
/*******************************************************/
function Costo_Unitario_Prod(){
	Total_Unidades = 0
	Costo_Total = 0
	$("#Unidades_U").each(function(){
		Total_Unidades = Total_Unidades + eval($(this).val());
	});
	$("#Costo_Total_U").each(function(){
		Costo_Total = Costo_Total + eval($(this).val());
	});
    cu = Costo_Total / Total_Unidades
    dcu = cu.toFixed(2)
	$("#Costo_Unitario").val(dcu);

	Guardar_Historial_Costo_Unitario();
}

function Guardar_Historial_Costo_Unitario(){
	/*Obtencion de Datos*/
		var Datos_Cantidad_Unidades = $("#Unidades_U").val();
		var Datos_Costo_Total = $("#Costo_Total_U").val();
		var Resultado_Costo_Unitario = $("#Costo_Unitario").val();
		var Arr_Costo_unitario = [Datos_Cantidad_Unidades, Datos_Costo_Total, Resultado_Costo_Unitario]
	/*Guardar datos en un Arreglo*/
		localStorage.setItem('costo_unitario',JSON.stringify(Arr_Costo_unitario))
	}

function Mostrar_Costo_Unitario(){
	/*Obtener datos almacenados*/
		$('#Historial_Vacio').hide();
		var Arr_Costo_unitario = localStorage.getItem('costo_unitario');
		Arr_Costo_unitario = JSON.parse(Arr_Costo_unitario);
	/*Mostrar datos almacenados*/
		$("#Cos_Total").html("Costo Total = " + Arr_Costo_unitario[0]);
		$("#Cant_Unid").html("Cantidad de Unidades = " + Arr_Costo_unitario[1]);
		$("#Resultado_Cos_Uni").html("Resultado = " + Arr_Costo_unitario[2]);
		$('#Datos_Costo_Unitario').show();
	}
		
function Borrar_Costo_Produccion(){  
	$('#Datos_Costo_Unitario').hide();
	localStorage.removeItem('costo_unitario');
/*Limpiar datos almacenados*/       
	$('#Cos_Total').html = "";
	$('#Cant_Unid').html = "";
	$('#Resultado_Cos_Uni').html = "";
	location.reload();
}

function Limpiar_costo() {
	document.getElementById("Unitario").reset();
}
/*******************************************************/
/*Ganancia Incompleto*/
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
}
/*Ganancia*/
function Limpiar_ganancia() {
    document.getElementById("ganancia").reset();
}
/*******************************************************/
/*Homogenizar las Unidades Incompleto*/
/*******************************************************/
function Homogenizar_Multiplicando() {
	Numero_de_Unidades = 1
	$(".Numero_de_Unidades").each(
        function(index, value) {
            Numero_de_Unidades = Numero_de_Unidades * eval($(this).val());
		});
	$("#Resultado_Multi").val(Numero_de_Unidades);
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
/*Indicadores Incompleto*/
/*******************************************************/
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
}
/*Indicadores*/
function Limpiar_indicadores() {
    document.getElementById("indicadores").reset();
}
/*******************************************************/
/*Indices Incompleto*/
/*******************************************************/
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
function Limpiar_indices() {
    document.getElementById("indices").reset();
}
/*******************************************************/
/*Productividad en Funcion de los Trabajadores Incompleto*/
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
}
/*Limpiar Productividad en Funcion de los Trabajadores*/
function Limpiar_Trabajadores() {
    document.getElementById("Trabajadores1").reset();
}
/*******************************************************/
/*Productividad en Funcion de los Materiales Incompleto*/
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
}
/*Limpiar Productividad en Funcion de los Materiales*/
function Limpiar_Materiales() {
    document.getElementById("Materiales1").reset();
}
/*******************************************************/
/*Productividad Multifactorial Incompleto*/
/*******************************************************/
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
/*Rentabilidad Incompleto*/
/*******************************************************/
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
function Limpiar_rentabilidad() {
    document.getElementById("rentabilidad").reset();
}