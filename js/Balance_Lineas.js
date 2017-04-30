/*******************************************************/
/*Numero de Recursos*/
/*******************************************************/
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
/*******************************************************/
/*Limpiar*/
/*******************************************************/
/*Numero_Recursos*/
function Limpiar_Numero_Recursos() {
    document.getElementById("Numero_Recursos").reset();
}