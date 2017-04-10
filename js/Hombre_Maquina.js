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