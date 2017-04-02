/*******************************************************/
/*Navigator*/
/*******************************************************/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
     document.body.style.backgroundColor = "rgba(230,230,230,0.80)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#e6e6e6";
   
}
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
/*Conversiones a Unidades * $/Unidades */
/*******************************************************/
function calcular_total1() {
	importe_total1 = 1
	$(".importe_linea1").each(
		function(index, value) {
			importe_total1 = importe_total1 * eval($(this).val());
		});
	$("#total1").val(importe_total1);
}
function nueva_linea1() {
	$("#lineas1").append('<input type="text" class="importe_linea1" value="0"/><br/>');
    input.placeholder = "Valor $";
}
/*******************************************************/
/*Costos Totales*/
/*******************************************************/
function calcular_total() {
	importe_total = 0
	$(".importe_linea").each(
		function(index, value) {
			importe_total = importe_total + eval($(this).val());
		});
	$("#total").val(importe_total);
}
function nueva_linea() {
	$("#lineas").append('<input type="text" class="importe_linea" value="0"/><br/>');
    input.placeholder = "Valor $";
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
	$("#Resultado1").val(Math.round (Costo_Total / total_unidades));
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