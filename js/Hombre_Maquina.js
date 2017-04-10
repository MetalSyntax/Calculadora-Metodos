/*******************************************************/
/*Numero Tecnico, Ciclos y Piezas por Ciclo*/
/*******************************************************/
function Numero_Tecnico(){
   toe = 0
   toi = 0
   tm = 0
   td = 0
   nt = 0
   cm = 0
   co = 0
	$("#toe").each(function(index,value){
		toe = toe + eval($(this).val());
	});
	$("#toi").each(function(index,value){
		toi = toi + eval($(this).val());
	});
    $("#tm").each(function(index,value){
		tm = tm + eval($(this).val());
	});
	$("#td").each(function(index,value){
		td = td + eval($(this).val());
	});
    cm = toe + tm
    co = toe + toi +td
	$("#nt").val(cm / co);
    
    c1 = 0
    c2 = 0
    c1 = (cm / co)*10
    c2 = c1 + toi
    $("#c1").val(c1);
    $("#c2").val(c2);
    
    pc1 = 0
    pc2 = 0
    pc1 = c1/10
    pc2 = c2/10
    $("#pc1").val(Math.floor(pc1));
    $("#pc2").val(Math.ceil(pc2));
}
/*******************************************************/
/*Tiempo Necesario*/
/*******************************************************/
function Tiempo_Necesario(){
    np = 0
    tc = 0
    pt = 0
    e = 0
    tn = 0
    $("#np").each(function(index,value){
		np = np + eval($(this).val());
	});
	$("#tc").each(function(index,value){
		tc = tc + eval($(this).val());
	});
    $("#pt").each(function(index,value){
		pt = pt + eval($(this).val());
	});
	$("#e").each(function(index,value){
		e = e + eval($(this).val());
	});
    tn = np * (tc/pt)*(1/e)*(1/60);
    $("#tn").val(tn);
}
/*******************************************************/
/*Analisis de Costos*/
/*******************************************************/
function Analisis_de_Costos(){
    
    
}
/*******************************************************/
/*Costos Totales*/
/*******************************************************/
function Costos_Totales() {
	costo_total = 0
	$(".importe_linea").each(
		function(index, value) {
			costo_total = costo_total + eval($(this).val());
		});
	$("#costo_total").val(costo_total);
}
function Nueva_Linea() {
	$("#lineas").append('<input type="text" class="importe_linea" value="0"/><br/>');
    input.placeholder = "Valor $";
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