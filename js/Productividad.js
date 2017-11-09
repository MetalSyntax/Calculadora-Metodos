/*******************************************************/
/*Costos Totales*/
/*******************************************************/
function Costos_Totales() {
	Sumatoria_Costos = 0
	$(".Costos_Totales_Datos").each(function(index, value) {
			Sumatoria_Costos = Sumatoria_Costos + eval($(this).val());
		});
	$("#Costo_Total_Resultado").val(Sumatoria_Costos); 
    
/*Guardar Datos en el Historial*/ 
/*Obtencion de Datos*/
var Costo_Total_Resultado = document.getElementById("Costo_Total_Resultado").value;
/*Guardando los datos en el LocalStorage*/ 
localStorage.setItem("Costo_Total_Resultado", Costo_Total_Resultado)
}

/*Mostrar Historial*/
function Mostrar_Costos_Totales(){
/*Obtener datos almacenados*/
var Resul_Cos_To = localStorage.getItem("Costo_Total_Resultado")
/*Mostrar datos almacenados*/
document.getElementById("Resul_Cos_To").innerHTML = "Resultado = " + Resul_Cos_To;
}

/*Borrar Historial*/
function Borrar_Costo_Totales(){  
localStorage.removeItem("Costo_Total_Resultado");
/*Limpiar datos almacenados*/       
document.getElementById('Resul_Cos_To').innerHTML = "";
location.reload();
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
}
/*Unitarios*/
function Limpiar_costo() {
document.getElementById("Unitario").reset();
}
/*******************************************************/
/*Costos de Produccion*/
/*******************************************************/
function Costos_de_Produc(){
	var Material = 0
	var Costo = 0
	$("#MaterialP").each(function(index,value){
		Material = Material + eval($(this).val());
	});
	$("#CostoP").each(function(index,value){
		Costo = Costo + eval($(this).val());
	});
    produccion = Math.round (Material * Costo)
	$("#ResultadoP").val(produccion); 

/*Guardar Datos en el Historial*/ 
/*Obtencion de Datos*/
var Material_Costos_Produccion = document.getElementById("MaterialP").value;
var Costo_Costos_Produccion = document.getElementById("CostoP").value;
var Resultado_Costos_Produccion = document.getElementById("ResultadoP").value;

/*Guardando los datos en el LocalStorage*/ 
localStorage.setItem("Material_Costos_Produccion",Material_Costos_Produccion);
localStorage.setItem("Costo_Costos_Produccion",Costo_Costos_Produccion)
localStorage.setItem("Resultado_Costos_Produccion", Resultado_Costos_Produccion);
}

/*Mostrar Historial*/
function Mostrar_Costo_Produccion(){
/*Obtener datos almacenados*/
var Mat_Cos_Pro = localStorage.getItem("Material_Costos_Produccion")
var Cos_Cos_Pro = localStorage.getItem("Costo_Costos_Produccion")
var Resul_Cost_Pro = localStorage.getItem("Resultado_Costos_Produccion");  
/*Mostrar datos almacenados*/
document.getElementById("Mat_Cos_Pro").innerHTML = "Material = " + Mat_Cos_Pro;
document.getElementById("Cos_Cos_Pro").innerHTML = "Costo = " + Cos_Cos_Pro;
document.getElementById("Resultado_Cos_Pro").innerHTML = "Resultado = " + Resul_Cost_Pro;
}

/*Borrar Historial*/
function Borrar_Costo_Produccion(){  
localStorage.removeItem("Material_Costos_Produccion");
localStorage.removeItem("Costo_Costos_Produccion");
localStorage.removeItem("Resultado_Costos_Produccion");
/*Limpiar datos almacenados*/       
document.getElementById('Mat_Cos_Pro').innerHTML = "";
document.getElementById('Cos_Cos_Pro').innerHTML = "";
document.getElementById('Resultado_Cos_Pro').innerHTML = "";
location.reload();
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
/*Indices*/
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
}
/*Limpiar Productividad en Funcion de los Materiales*/
function Limpiar_Materiales() {
    document.getElementById("Materiales1").reset();
}
/*******************************************************/
/*Productividad Multifactorial*/
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
/*Rentabilidad*/
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