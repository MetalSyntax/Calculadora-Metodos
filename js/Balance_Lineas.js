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
/*Red de Presedencia*/
/*******************************************************/
function red_precedencia(){
    
}
/*******************************************************/
/*Base de Equilibrio*/
/*******************************************************/
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
    
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

 var li = document.createElement("li");
  var inputValue = document.getElementById("Resultado_be").value+" Minutos / Unidades";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("Resultado_be").value;

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
/*******************************************************/
/*Limpiar*/
/*******************************************************/
/*Numero_Recursos*/
function Limpiar_Numero_Recursos() {
    document.getElementById("Numero_Recursos").reset();
}
function Limpiar_base_equilibrio() {
    document.getElementById("Base_Equilibrio").reset();
}