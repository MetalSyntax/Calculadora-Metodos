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
    function Analisis_de_Costos1(){
    mohjn = 0
   mocjn = 0
    tjn = 0
    cmojn = 0
    
    $("#mohjn").each(function(index,value){
		mohjn = mohjn + eval($(this).val());
	});
	$("#mocjn").each(function(index,value){
		mocjn = mocjn + eval($(this).val());
	});
    $("#tjn").each(function(index,value){
		tjn = tjn + eval($(this).val());
	});
    cmojn = mohjn * mocjn * tjn
    $("#cmojn").val(cmojn);
   
    }
     function Analisis_de_Costos2(){
    motje = 0
    mocje = 0
    tje = 0
    cmoje = 0
    
    $("#motje").each(function(index,value){
		motje = motje + eval($(this).val());
	});
	$("#mocje").each(function(index,value){
		mocje = mocje + eval($(this).val());
	});
    $("#tje").each(function(index,value){
		tje = tje + eval($(this).val());
	});
    cmoje = motje * mocje * tje
    $("#cmoje").val(cmoje);
     }
    function Analisis_de_Costos3(){
    mmjf = 0
    mcjf = 0
    mf = 0
    cmjf = 0
    tnm1 = 0
    tcm1 = 0
    
    $("#tnm1").each(function(index,value){
		tnm1 = tnm1 + eval($(this).val());
	});
    $("#tcm1").each(function(index,value){
		tcm1 = tcm1 + eval($(this).val());
	});
    
    $("#mmjf").each(function(index,value){
		mmjf = mmjf + eval($(this).val());
	});
	$("#mcjf").each(function(index,value){
		mcjf = mcjf + eval($(this).val());
	});
    $("#mf").each(function(index,value){
		mf = mf + eval($(this).val());
	});
    cmjf = mmjf * mcjf * tnm1 * (mf/tcm1)
    $("#cmjf").val(cmjf);
    }

    function Analisis_de_Costos4(){
    mmja = 0
    mcja = 0
    mp = 0
    cmjp = 0
    tnm2 = 0
    tcm2 = 0
    
    $("#tnm2").each(function(index,value){
		tnm2 = tnm2 + eval($(this).val());
	});
    $("#tcm2").each(function(index,value){
		tcm2 = tcm2 + eval($(this).val());
	});
    
    $("#mmja").each(function(index,value){
		mmja = mmja + eval($(this).val());
	});
	$("#mcja").each(function(index,value){
		mcja = mcja + eval($(this).val());
	});
    $("#mp").each(function(index,value){
		mp = mp + eval($(this).val());
	});
    cmjp = mmja * mcja * tnm2 * (mp/tcm2)
    $("#cmjp").val(cmjp);
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