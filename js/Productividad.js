/*******************************************************/
/*Productividad en Funcion de los Trabajadores*/
/*******************************************************/
function Productividad_FT(){
	total_unidades = 0
	total_trabajadores = 0
	$("#Unidades").each(function(index,value){
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Trabajadores").each(function(index,value){
		total_trabajadores = total_trabajadores + eval($(this).val());
	});
	$("#total").val(total_unidades / total_trabajadores);
}
/*******************************************************/
/*Productividad en Funcion de los Materiales*/
/*******************************************************/
function Productividad_FM(){
	var total_unidades, total_materiales;
	var total, subtotal;

	total_unidades = document.getElementById("Unidades").value;
	total_materiales = document.getElementById("Materiales").value;
	
	subtotal = parseFloat(total_unidades) /  parseFloat(total_materiales);
	document.getElementById("SubTotal").innerHTML = "El SubTotal es = " + subtotal;
	
	total = total_unidades / subtotal
	document.getElementById("Total").innerHTML = "El Total es = " + total;
}
/*******************************************************/
/*Conversiones a Unidades*/
/*******************************************************/
function Multiplicando() {
	Numero_de_Unidades = 1
	$(".Numero_de_Unidades").each(
		function(index, value) {
			Numero_de_Unidades = Numero_de_Unidades * eval($(this).val());
		});
	$("#Resultado_Multi").val(Numero_de_Unidades);
}
function Dividiendo() {
    $("#Resultado_Divi").val(Numero_de_Unidades);
}
function Nueva_Linea_Trans() {
	$("#Transformaciones").append('<input type="number" class="Numero_de_Unidades" value="0"/><br/>');   
}
/*******************************************************/
/*Costos Totales*/
/*******************************************************/
function Costos_Totales() {
	costo_total = 0
	$(".costos_totales").each(
		function(index, value) {
			costo_total = costo_total + eval($(this).val());
		});
	$("#costo_total").val(costo_total);
}
function Nueva_Linea_Costo() {
	$("#Costos_Linea").append('<input type="number" class="costos_totales" value="0"/><br/>');
}
/*******************************************************/
/*Costo Unitario*/
/*******************************************************/
function Costo_Unitario(){
	total_unidades = 0
	Costo_Total = 0
	$("#Unidades1").each(function(index,value){
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Costo_Total1").each(function(index,value){
		Costo_Total = Costo_Total + eval($(this).val());
	});
	$("#Costo_Unitario").val(Math.round (Costo_Total / total_unidades));
}
/*******************************************************/
/*Productividad*/
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
/*******************************************************/
/*Ganancia*/
/*******************************************************/
function Ganancia(){
	pvp = 0
	Costo_unitario = 0
	$("#pvp").each(function(index,value){
		pvp = pvp + eval($(this).val());
	});
	$("#Costo_unitario").each(function(index,value){
		Costo_unitario = Costo_unitario + eval($(this).val());
	});
	$("#Resultado2").val(Math.round (pvp - Costo_unitario));
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
	$("#Resultado3").val(Math.round ((pvp1 / Costo_unitario1) * 100));
}
/*******************************************************/
/*Costos de Produccion*/
/*******************************************************/
function Costos_de_Produccion(){
	Material = 0
	Costo = 0
	$("#Material1").each(function(index,value){
		Material = Material + eval($(this).val());
	});
	$("#Costo1").each(function(index,value){
		Costo = Costo + eval($(this).val());
	});
	$("#Resultado1").val(Math.round (Material * Costo));
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
	$("#Material2").each(function(index,value){
		Material = Material + eval($(this).val());
	});
	$("#Resultado2").val(Mes / Material);
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
	$("#Resultado3").val(Estudio / Base)*100;
}
/*******************************************************/
/*Limpiar Transformaciones*/
/*******************************************************/
function Limpiar() {
    document.getElementById("trans").reset();
}