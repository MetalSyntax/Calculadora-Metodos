/*******************************************************/
/*Numero de Recursos*/
/*******************************************************/
document.getElementById("Calcular_Numero_Recursos").addEventListener("click", Numero_Recursos);
function Numero_Recursos(){
	tsi = 0
	be = 0
	$("#tsi").each(function(index,value){
		tsi = tsi + eval($(this).val());
	});
	$("#be").each(function(index,value){
		be = be + eval($(this).val());
	});
    nr = tsi/be
	$("#nr").val(nr);
}
/*Numero de Recursos*/
document.getElementById("Limpiar_Numero_Recursos").addEventListener("click",Limpiar_Numero_Recursos);
function Limpiar_Numero_Recursos() {
document.getElementById("Numero_Recursos").reset();
}
/*******************************************************/
/*Base de Equilibrio*/
/*******************************************************/
document.getElementById("Calcular_base_equilibrio").addEventListener("click", base_equilibrio);
function base_equilibrio() {
    demanda_inv = 0
    jornada_normal_be = 0
    eficiencia_be = 0
    be = 0
    $("#demanda_be").each(function(index,value){
		demanda_inv = demanda_inv + eval($(this).val());
	});
    $("#jornada_normal_be").each(function(index,value){
		jornada_normal_be = jornada_normal_be + eval($(this).val());
	});
    $("#eficiencia_be").each(function(index,value){
		eficiencia_be = eficiencia_be + eval($(this).val());
	});
    base_equi = (1/demanda_inv)*jornada_normal_be*60*eficiencia_be
    $("#Resultado_be").val(base_equi);
}
/*Base de Equilibrio*/
document.getElementById("Limp_base_equilibrio").addEventListener("click",Limpiar_base_equilibrio);
function Limpiar_base_equilibrio() {
    document.getElementById("Base_Equilibrio").reset();
}
/*******************************************************/
/*Red de Presedencia*/
/*******************************************************/
document.getElementById("Calcular_red_precedencia").addEventListener("click",red_precedencia);
function red_precedencia(){
	Sumatoria_RP = 0
	$(".Tiempos_Red").each(function(index, value) {
			Sumatoria_RP = Sumatoria_RP + eval($(this).val());
		});
	$("#Resultado_Red").val(Sumatoria_RP);
}
/*Nueva Linea*/
document.getElementById("Nueva_Linea_Red").addEventListener("click",Nueva_Linea_Red);
function Nueva_Linea_Red() {
	$("#Red_de_Precedencia").append('<input type="number" class="Tiempos_Red" value="0"/><br/>');
}
/*Borrar Linea*/
document.getElementById("Borrar_Linea_Red").addEventListener("click",Borrar_Linea_Red);
function Borrar_Red_de_Precedencia(){
    $("#Red_de_Precedencia").empty('<input type="number" class="Tiempos_Red" value="0">/><br/>');
}
/*Red de Precedencia*/
document.getElementById("Limpiar_Red_de_Precedencia").addEventListener("click",Limpiar_Red_de_Precedencia);
function Limpiar_Red_de_Precedencia() {
    document.getElementById("red").reset();
}
/*******************************************************/
/*Ritmo*/
/*******************************************************/
function Ritmo_Balance_Lineas(){
}
function Limpiar_Ritmo_Balance_Lineas(){
}
/*******************************************************/
/*Eficiencia de Linea*/
/*******************************************************/
function Eficacia_Balance_Lineas(){
}
function Limpiar_Eficacia(){
}
/*******************************************************/
/*Tiempo Extra*/
/*******************************************************/
