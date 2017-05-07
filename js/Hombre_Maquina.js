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
    nt = cm / co
	$("#nt").val(nt);
    
    c1 = 0
    c2 = 0
    c1 = cm
    c2 = c1 + toi
    if (cm == c2){
    var c2 = c2 + Math.floor(nt)
    }
    $("#c1").val(Math.round(c1));
    $("#c2").val(Math.round(c2));
    
    pc1 = 0
    pc2 = 0
    pc1 = nt
    pc2 = nt
    $("#pc1").val(Math.floor(pc1));
    $("#pc2").val(Math.ceil(pc2));
    
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
  var inputValue = "Numero Tecnico = "+document.getElementById("nt").value+" Ciclo 1 = "+document.getElementById("c1").value+" Ciclo 2 = "+document.getElementById("c2").value+" Piezas Ciclo 1 = "+document.getElementById("pc1").value+" Piezas Ciclo 2 = "+document.getElementById("pc2").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

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
  var inputValue = document.getElementById("tn").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("tn").value;

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
  var inputValue = document.getElementById("cmojn").value+" $ ";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("cmojn").value;

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
  var inputValue = document.getElementById("cmoje").value+" $ ";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("cmoje").value;

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
  var inputValue = document.getElementById("cmjf").value+" $ ";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("cmjf").value;

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
  var inputValue = document.getElementById("cmjp").value+" $ ";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("cmjp").value;

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
  var inputValue = document.getElementById("produccion_resultado").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("produccion_resultado").value;

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
  var inputValue = document.getElementById("PiezasDF_resultado").value+" Piezas Defectuosas";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("PiezasDF_resultado").value;

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
  var inputValue = document.getElementById("DemandaA_resultado").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("DemandaA_resultado").value;

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
  var inputValue = document.getElementById("HombresNH").value+" Hombres "+document.getElementById("MaquinasNH").value+" Maquinas ";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("MaquinasNH").value;

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
    if (document.getElementById("cdim").value == ""){
    var cdim = document.getElementById("cdim").value = " $ "
    }
     $("#resultado_inv").val(resultado_inv);
    
    
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
  var inputValue = document.getElementById("resultado_inv").value+" "+document.getElementById("cdim").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("resultado_inv").value;

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
  var inputValue = document.getElementById("resultado_CDF").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("resultado_CDF").value;

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
  var inputValue = document.getElementById("resultado_Depre").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("resultado_Depre").value;

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
  var inputValue = document.getElementById("resultado_CM").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("resultado_CM").value;

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
/*Numero_Tecnico*/
function Limpiar_Numero_Tecnico() {
    document.getElementById("NTCPC").reset();
}
/*Produccion_HM*/
function Limpiar_Produccion_HM() {
    document.getElementById("Produccion_HM").reset();
}
/*Demanda_Aumentada*/
function Limpiar_Demanda_Aumentada() {
    document.getElementById("Demanda_Aumentada").reset();
}
/*Piezas_Defectuosas*/
function Limpiar_Piezas_Defectuosas() {
    document.getElementById("Piezas_Defectuosas").reset();
}
/*Numero_de_Hombres*/
function Limpiar_Numero_de_Hombres() {
    document.getElementById("Numero_de_Hombres").reset();
}
/*Costo_de_Inversion*/
function Limpiar_Costo_de_Inversion() {
    document.getElementById("Costo_de_Inversion").reset();
}
/*CMOJN*/
function Limpiar_CMOJN() {
    document.getElementById("CMOJN").reset();
}
/*CMOJE*/
function Limpiar_CMOJE() {
    document.getElementById("CMOJE").reset();
}
/*CMF*/
function Limpiar_CMF() {
    document.getElementById("CMF").reset();
}
/*CMP*/
function Limpiar_CMP() {
    document.getElementById("CMP").reset();
}
/*Costo_Piezas_Defectuosas*/
function Limpiar_Costo_Piezas_Defectuosas() {
    document.getElementById("Costo_Piezas_Defectuosas").reset();
}
/*Costo_de_Materiales*/
function Limpiar_Costo_de_Materiales() {
    document.getElementById("Costo_de_Materiales").reset();
}
/*Depreciasion*/
function Limpiar_Depreciasion() {
    document.getElementById("Depreciasion").reset();
}
/*Tiempo Necesario*/
function Limpiar_Tiempo_Necesario() {
    document.getElementById("Tiempo_Necesario").reset();
}

