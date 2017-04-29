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
/*******************************************************/
/*Costo de la Mano de Obra (Jornada Normal)*/
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
/*******************************************************/
/*Costo de la Mano de Obra (Jornada Extra)*/
/*******************************************************/
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
/*******************************************************/
/*Costo de Maquinaria (Encendida)*/
/*******************************************************/
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
/*******************************************************/
/*Costo de maquinaria (Apagada)*/
/*******************************************************/
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
	$("#Costo_Unitario").val(Costo_Total / total_unidades);
}
/*******************************************************/
/*Produccion*/
/*******************************************************/
function Produccion(){
     numero_piezas = 0
     ciclo_produccion = 0
     tiempo_produccion = 0
     eficiencia_produccion = 0
    produccion_resultado = 0
    $("#Numero_Piezas").each(function(index,value){
		numero_piezas = numero_piezas + eval($(this).val());
	});
	$("#Ciclo_Produccion").each(function(index,value){
		ciclo_produccion = ciclo_produccion + eval($(this).val());
	});
    $("#Tiempo_Produccion").each(function(index,value){
		tiempo_produccion = tiempo_produccion + eval($(this).val());
	});
	$("#Eficiencia_Produccion").each(function(index,value){
		eficiencia_produccion = eficiencia_produccion + eval($(this).val());
	});
    produccion_resultado = (numero_piezas / ciclo_produccion) * tiempo_produccion * eficiencia_produccion
    $("#produccion_resultado").val(produccion_resultado);
}
/*******************************************************/
/*Piezas Defectuosas*/
/*******************************************************/
function piezas_defectuosas(){
    demanda_aumentadaDF = 0
    demandaDF = 0
    $("#Demanda_AumentadaDF").each(function(index,value){
		demanda_aumentadaDF = demanda_aumentadaDF + eval($(this).val());
	});
	$("#DemandaDF").each(function(index,value){
		demandaDF = demandaDF + eval($(this).val());
	});
    PiezasDF = demanda_aumentadaDF - demandaDF
    $("#PiezasDF_resultado").val(PiezasDF);
}
/*******************************************************/
/*Demanda Aumentada*/
/*******************************************************/
function Demanda_Aumentada(){
    Demanda = 0
    PorcentajeError = 0
    $("#Demanda").each(function(index,value){
		Demanda = Demanda + eval($(this).val());
	});
	$("#PorcentajeError").each(function(index,value){
		PorcentajeError = PorcentajeError + eval($(this).val());
	});
    DemandaA = (Demanda * 100 / (100-PorcentajeError))
    $("#DemandaA_resultado").val(DemandaA);
}
/*******************************************************/
/*Numero de Hombres*/
/*******************************************************/
function Numero_de_Hombres(){
    Demanda_Aumentada_NH = 0
    Produccion_NH = 0
    HombresNH = 0
    MaquinasNH = 0
     $("#Demanda_Aumentada_NH").each(function(index,value){
		Demanda_Aumentada_NH = Demanda_Aumentada_NH + eval($(this).val());
	});
	$("#Produccion_NH").each(function(index,value){
		Produccion_NH = Produccion_NH + eval($(this).val());
	});
    NH_resultado = Demanda_Aumentada_NH / Produccion_NH
     $("#NH_resultado").val(NH_resultado);
    HombresNH = HombresNH +(Math.round(NH_resultado))
     $("#HombresNH").val(HombresNH);
     MaquinasNH = MaquinasNH + HombresNH*2
     $("#MaquinasNH").val(MaquinasNH);
}
/*******************************************************/
/*Costo de Inversion*/
/*******************************************************/
function Costo_Inversion(){
    cuxum = 0
    nxm = 0
     $("#cuxum").each(function(index,value){
		cuxum = cuxum + eval($(this).val());
	});
	$("#nxm").each(function(index,value){
		nxm = nxm + eval($(this).val());
	});
    resultado_inv = cuxum * nxm
     $("#resultado_inv").val(resultado_inv);
}
/*******************************************************/
/*Costo de Piezas Defectuosas */
/*******************************************************/
function Costo_Piezas_Defectuosas(){
    pdc = 0
    cpd = 0
     $("#pdc").each(function(index,value){
		pdc = pdc + eval($(this).val());
	});
	$("#cpd").each(function(index,value){
		cpd = cpd + eval($(this).val());
	});
    resultado_CDF = pdc * cpd
     $("#resultado_CDF").val(resultado_CDF);
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
	$("#ResultadoG").val(Math.round (pvp - Costo_unitario));
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
/*******************************************************/
/*Depreciasion*/
/*******************************************************/
function Costo_Depre(){
    cxi = 0
    vxu = 0
     $("#cxi").each(function(index,value){
		cxi = cxi + eval($(this).val());
	});
	$("#vxu").each(function(index,value){
		vxu = vxu + eval($(this).val());
	});
    resultado_Depre = cxi * vxu
     $("#resultado_Depre").val(resultado_Depre);
}
/*******************************************************/
/*Costo de Materiales*/
/*******************************************************/
function Costo_Materiales(){
    daCM = 0
    CM = 0
     $("#daCM").each(function(index,value){
		daCM = daCM + eval($(this).val());
	});
	$("#CM").each(function(index,value){
		CM = CM + eval($(this).val());
	});
    resultado_CM = cxi * vxu
     $("#resultado_CM").val(resultado_CM);
}