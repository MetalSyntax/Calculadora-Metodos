/*******************************************************/
/*Calificacion del Operario*/
/*******************************************************/
function Calificacion_OP(){
    
   var Supl_Sex,Necesidades,Fatiga,Trabajo;
   var Supl_Postura, Postura;
   var Supl_Fuerza, Fuerza;
   var Supl_Iluminacion, Iluminacion;
   var Supl_atmosfericas, Atmosfericas;
   var Supl_Concentracion, Concentracion;
   var Supl_Ruido, Ruido;
   var Supl_mental, Mental;
   var Supl_Monotonia, Monotonia;
   var Supl_Tedio, Tedio;
   var Sum_Tol,Sum_Tol_Total;
    
    Supl_Sex = document.getElementById("Supl_Sex").value;
    Supl_Postura = document.getElementById("Supl_Postura").value;
    Supl_Fuerza = document.getElementById("Supl_Fuerza").value;
    Supl_Iluminacion =  document.getElementById("Supl_Iluminacion").value;
    Supl_atmosfericas = document.getElementById("Supl_atmosfericas").value;
    Supl_Concentracion = document.getElementById("Supl_Concentracion").value;
    Supl_Ruido =  document.getElementById("Supl_Ruido").value;
    Supl_mental = document.getElementById("Supl_mental").value;
    Supl_Monotonia = document.getElementById("Supl_Monotonia").value;
    Supl_Tedio = document.getElementById("Supl_Tedio").value;

    /*Hombre*/
    if (Supl_Sex=="Hombres"){
    
    Necesidades = 5;
    Fatiga = 4;
    Trabajo = 2;
        
    /*Postura*/
    if (Supl_Postura=="Ligeramente incómoda"){
    Postura = 0;
    } 
    if (Supl_Postura=="incómoda"){
    Postura = 2;
    }
    if (Supl_Postura=="Muy incómoda"){
    Postura = 7;
    }
        
    /*Fuerza*/
    if (Supl_Fuerza=="2,5"){
    Fuerza = 0;
    }
    if (Supl_Fuerza=="5"){
    Fuerza = 1;
    }
    if (Supl_Fuerza=="10"){
    Fuerza = 3;
    }
    if (Supl_Fuerza=="25"){
    Fuerza = 9;
    }
    if (Supl_Fuerza=="35,5"){
    Fuerza = 22;
    }
    
    /*Iluminacion*/
    if (Supl_Iluminacion=="Ligeramente por debajo"){
    Iluminacion = 0;
    }
    if (Supl_Iluminacion=="Bastante por debajo"){
    Iluminacion = 2;
    }
    if (Supl_Iluminacion=="Absolutamente insuficiente"){
    Iluminacion = 5;
    }
        
    /*Atmosfericas*/
    if (Supl_atmosfericas=="16"){
    Atmosfericas = 0;
    }
    if (Supl_atmosfericas=="8"){
    Atmosfericas = 10;
    }
    if (Supl_atmosfericas=="4"){
    Atmosfericas = 45;
    }
    if (Supl_atmosfericas=="2"){
    Atmosfericas = 100;
    }
        
    /*Concentracion*/
    if (Supl_Concentracion=="Cierta precisión"){
    Concentracion = 0;
    }
    if (Supl_Concentracion=="Fatigosos"){
    Concentracion = 2;
    }
    if (Supl_Concentracion=="Muy fatigosos"){
    Concentracion = 5;
    }
        
    /*Ruido*/
    if (Supl_Ruido=="Continuo"){
    Ruido = 0;
    }
    if (Supl_Ruido=="Intermitente y fuerte"){
    Ruido = 2;
    }
    if (Supl_Ruido=="Intermitente y muy fuerte"){
    Ruido = 5;
    }
    if (Supl_Ruido=="Estridente y fuerte"){
    Ruido = 5;
    }
    
    /*Tension Mental*/
    if (Supl_mental=="Proceso Bastante complejo"){
    Mental = 1;
    }
    if (Supl_mental=="Proceso complejo"){
    Mental = 4;
    }
    if (Supl_mental=="Muy complejo"){
    Mental = 8;
    }
        
    /*Monotonía*/
    if (Supl_Monotonia=="Algo Monótono"){
    Monotonia = 0;
    }
    if (Supl_Monotonia=="Bastante Monótono"){
    Monotonia = 1;
    }
    if (Supl_Monotonia=="Muy Monótono"){
    Monotonia = 4;
    }
    
    /*Tedio*/
    if (Supl_Tedio=="Algo Aburrido"){
    Tedio = 0;
    }
    if (Supl_Tedio=="Bastante Aburrido"){
    Tedio = 2;
    }
    if (Supl_Tedio=="Muy Aburrido"){
    Tedio = 5;
    }
     
    console.log(Necesidades)
    console.log(Fatiga)
    console.log(Trabajo)
    console.log(Postura)
    console.log(Fuerza)
    console.log(Iluminacion)
    console.log(Atmosfericas)
    console.log(Concentracion)
    console.log(Ruido)
    console.log(Mental)
    console.log(Monotonia)
    console.log(Tedio)
        
        
    Sum_Tol = (Necesidades + Fatiga + Trabajo + parseFloat(Postura) + parseFloat(Fuerza) + parseFloat(Iluminacion) + parseFloat(Atmosfericas) + parseFloat(Concentracion) + parseFloat(Ruido) + parseFloat(Mental) + parseFloat(Monotonia) + parseFloat(Tedio));
    Sum_Tol_Total = (Sum_Tol/100)+1;
    
    $("#resultado_supl").val(Sum_Tol_Total);
        
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
  var inputValue = document.getElementById("resultado_supl").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("Resultado_Red").value;

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
    
    /*Mujeres*/
    if (Supl_Sex=="Mujer"){
   
    Necesidades = 7;
    Fatiga = 4;
    Trabajo = 4;
        
    /*Postura*/
    if (Supl_Postura=="Ligeramente incómoda"){
    Postura = 1;
    } 
    if (Supl_Postura=="incómoda"){
    Postura = 3;
    }
    if (Supl_Postura=="Muy incómoda"){
    Postura = 7;
    }
    
    /*Fuerza*/
    if (Supl_Fuerza=="2,5"){
    Fuerza = 1;
    }
    if (Supl_Fuerza=="5"){
    Fuerza = 2;
    }
    if (Supl_Fuerza=="10"){
    Fuerza = 4;
    }
    if (Supl_Fuerza=="25"){
    Fuerza = 20;
    }
     
    /*Iluminacion*/
    if (Supl_Iluminacion=="Ligeramente por debajo"){
    Iluminacion = 0;
    }
    if (Supl_Iluminacion=="Bastante por debajo"){
    Iluminacion = 2;
    }
    if (Supl_Iluminacion=="Absolutamente insuficiente"){
    Iluminacion = 5;
    }
        
    /*Atmosfericas*/
    if (Supl_atmosfericas=="16"){
    Atmosfericas = 0;
    }
    if (Supl_atmosfericas=="8"){
    Atmosfericas = 10;
    }
    if (Supl_atmosfericas=="4"){
    Atmosfericas = 45;
    }
    if (Supl_atmosfericas=="2"){
    Atmosfericas = 100;
    }
        
    /*Concentracion*/
    if (Supl_Concentracion=="Cierta precisión"){
    Concentracion = 0;
    }
    if (Supl_Concentracion=="Fatigosos"){
    Concentracion = 2;
    }
    if (Supl_Concentracion=="Muy fatigosos"){
    Concentracion = 5;
    }
        
    /*Ruido*/
    if (Supl_Ruido=="Continuo"){
    Ruido = 0;
    }
    if (Supl_Ruido=="Intermitente y fuerte"){
    Ruido = 2;
    }
    if (Supl_Ruido=="Intermitente y muy fuerte"){
    Ruido = 5;
    }
    if (Supl_Ruido=="Estridente y fuerte"){
    Ruido = 5;
    }
        
    /*Tension Mental*/
    if (Supl_mental=="Proceso Bastante complejo"){
    Mental = 1;
    }
    if (Supl_mental=="Proceso complejo"){
    Mental = 4;
    }
    if (Supl_mental=="Muy complejo"){
    Mental = 8;
    }
        
     /*Monotonía*/
    if (Supl_Monotonia=="Algo Monótono"){
    Monotonia = 0;
    }
    if (Supl_Monotonia=="Bastante Monótono"){
    Monotonia = 1;
    }
    if (Supl_Monotonia=="Muy Monótono"){
    Monotonia = 4;
    }
    
    /*Tedio*/
    if (Supl_Tedio=="Algo Aburrido"){
    Tedio = 0;
    }
    if (Supl_Tedio=="Bastante Aburrido"){
    Tedio = 1;
    }
    if (Supl_Tedio=="Muy Aburrido"){
    Tedio = 2;
    } 
        
    console.log(Necesidades)
    console.log(Fatiga)
    console.log(Trabajo)
    console.log(Postura)
    console.log(Fuerza)
    console.log(Iluminacion)
    console.log(Atmosfericas)
    console.log(Concentracion)
    console.log(Ruido)
    console.log(Mental)
    console.log(Monotonia)
    console.log(Tedio)
        
  Sum_Tol = (Necesidades + Fatiga + Trabajo + parseFloat(Postura) + parseFloat(Fuerza) + parseFloat(Iluminacion) + parseFloat(Atmosfericas) + parseFloat(Concentracion) + parseFloat(Ruido) + parseFloat(Mental) + parseFloat(Monotonia) + parseFloat(Tedio));
  Sum_Tol_Total = (Sum_Tol/100)+1;
    
    $("#resultado_supl").val(Sum_Tol_Total);
        
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
  var inputValue = document.getElementById("resultado_supl").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("Resultado_Red").value;

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
}
/*******************************************************/
/*Suplementos de Descanso*/
/*******************************************************/
function Suplementos_DE(){
    
}
/*******************************************************/
/*Tiempo Necesario*/
/*******************************************************/
function Tiempo_NEMT(){
    
}
/*******************************************************/
/*Coeficiente de Variacion*/
/*******************************************************/
function Coeficiente_VAR(){
    
}
/*******************************************************/
/*Tiempo Estandar*/
/*******************************************************/
function Tiempo_ES(){
    
}
/*******************************************************/
/*Porcentaje de Tolerancia de Descanso*/
/*******************************************************/
function Tolerancia_DE(){
    
}
/*******************************************************/
/*Sumatoria de Suplementos*/
/*******************************************************/
function Suplementos_SU(){
    
}
/*******************************************************/
/*Numero de Observaciones*/
/*******************************************************/
function Observaciones_NUM(){
    
}
/*******************************************************/
/*Limpiar*/
/*******************************************************/
/*Suplementos*/
function Limpiar_Calificacion_OP() {
    document.getElementById("Supl_De").reset();
}