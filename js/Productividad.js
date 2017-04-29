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
	$("#Total_FT").val(total_unidades / total_trabajadores);
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
function Costo_Unitario_Prod(){
	Total_Unidades = 0
	Costo_Total = 0
	$("#Unidades_U").each(function(index,value){
		Total_Unidades = Total_Unidades + eval($(this).val());
	});
	$("#Costo_Total_U").each(function(index,value){
		Costo_Total = Costo_Total + eval($(this).val());
	});
	$("#Costo_Unitario").val(Costo_Total / Total_Unidades);
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
	$("#ResultadoP").val(Math.round (Material * Costo));
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
	$("#ResultadoIN").val(indice_p);
    $("#ResultadoPOR").val(indice_R);
}
/*******************************************************/
/*Limpiar*/
/*******************************************************/
/*Tranformaciones*/
function Limpiar_Trans() {
    document.getElementById("trans").reset();
}
/*Produccion*/
function Limpiar_prod() {
    document.getElementById("Produccion").reset();
}
/*unidades*/
function Limpiar_produc() {
    document.getElementById("Productividad").reset();
}
/*Totales*/
function Limpiar_costos() {
    document.getElementById("costos").reset();
}
/*Unitarios*/
function Limpiar_costo() {
    document.getElementById("Unitario").reset();
}
/*Indicadores*/
function Limpiar_indicadores() {
    document.getElementById("indicadores").reset();
}
/*Indices*/
function Limpiar_indices() {
    document.getElementById("indices").reset();
}
/*Ganancia*/
function Limpiar_ganancia() {
    document.getElementById("ganancia").reset();
}
/*Rentabilidad*/
function Limpiar_rentabilidad() {
    document.getElementById("rentabilidad").reset();
}
/*Trabajadores*/
function Limpiar_Trabajadores() {
    document.getElementById("Trabajadores1").reset();
}
/*Materiales*/
function Limpiar_Materiales() {
    document.getElementById("Materiales1").reset();
}

