/*Costos de Produccion*/
/*******************************************************/
function Costos_de_Produc() {
	var Material = 0;
	var Costo = 0;
	$("#MaterialP").each(function () {
		Material = Material + eval($(this).val());
	});
	$("#CostoP").each(function () {
		Costo = Costo + eval($(this).val());
	});
	produccion = Math.round(Material * Costo);
	$("#ResultadoP").val(produccion);

	Guardar_Historial_Costo_Produccion();
}

function Guardar_Historial_Costo_Produccion() {
	/*Obtencion de Datos*/
	var Material_Costos_Produccion = $("#MaterialP").val();
	var Costo_Costos_Produccion = $("#CostoP").val();
	var Resultado_Costos_Produccion = $("#ResultadoP").val();
	var Arr_Costo_Produccion = [Material_Costos_Produccion, Costo_Costos_Produccion, Resultado_Costos_Produccion];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Costo_Produccion', JSON.stringify(Arr_Costo_Produccion));
}

function Mostrar_Costo_Produc() {
	/*Obtener datos almacenados*/
	var Arr_Costo_Produccion = localStorage.getItem('Costo_Produccion');
	Arr_Costo_Produccion = JSON.parse(Arr_Costo_Produccion);

	if ((Arr_Costo_Produccion == "") || (Arr_Costo_Produccion == 0) || (Arr_Costo_Produccion == null)) {
		$("#Historial_Vacio").show();
		$("#Datos_Costo_Produccion").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Mat_Cos_Pro").html("Material = " + Arr_Costo_Produccion[0]);
		$("#Cos_Cos_Pro").html("Costo = " + Arr_Costo_Produccion[1]);
		$("#Resultado_Cos_Pro").html("Resultado = " + Arr_Costo_Produccion[2]);
		$("#Datos_Costo_Produccion").show();
	}
}

function Borrar_Costo_Produc() {
	$('#Datos_Costo_Produccion').hide();
	localStorage.removeItem('Costo_Produccion');
	localStorage.clear();
	/*Limpiar datos almacenados*/
	$('#Mat_Cos_Pro').html = "";
	$('#Cos_Cos_Pro').html = "";
	$('#Resultado_Cos_Pro').html = "";
	$("#Historial_Vacio").show();
}

/*Limpieza de Costo de Produccion*/
function Limpiar_prod() {
	document.getElementById("Produccion").reset();
}
/*Costos Totales*/
/*******************************************************/
function Costos_Totales() {
	Sumatoria_Costos = 0;
	$(".Costos_Totales_Datos").each(function () {
		Sumatoria_Costos = Sumatoria_Costos + eval($(this).val());
	});
	$("#Costo_Total_Resultado").val(Sumatoria_Costos);
	Guardar_Datos_Costos_Totales();
}

function Guardar_Datos_Costos_Totales() {
	/*Obtencion de Datos*/
	var Costo_Total_Resultado = $("#Costo_Total_Resultado").val();
	/*Guardando los datos en el LocalStorage*/
	localStorage.setItem("Costo_Total_Resultado", Costo_Total_Resultado);
}

function Mostrar_Costos_Totales() {
	/*Obtener datos almacenados*/
	var Resul_Cos_To = localStorage.getItem("Costo_Total_Resultado");

	if ((Resul_Cos_To == "") || (Resul_Cos_To == 0) || (Resul_Cos_To == null)) {
		$("#Historial_Vacio").show();
		$("#Datos_Costo_Totales").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Resul_Cos_To").html("Resultado = " + Resul_Cos_To);
		$('#Datos_Costo_Totales').show();
	}
}

function Borrar_Costo_Totales() {
	localStorage.removeItem("Costo_Total_Resultado");
	/*Limpiar datos almacenados*/
	document.getElementById('Resul_Cos_To').innerHTML = "";
}
/*Crear Linea de Costos*/
function Nueva_Linea_Costo() {
	$("#Costos_Linea").append('<input type="number" value="0" class="form-control Costos_Totales_Datos" required>');
}
/*Borrar Linea de Costos*/
function Borrar_Linea_Costo() {
	$('#Datos_Costo_Totales').hide();
	$(".Costos_Totales_Datos").remove();
	$("#Costos_Linea").append('<input type="number" value="0" class="form-control Costos_Totales_Datos" required>');
	$("#Historial_Vacio").show();
}
/*Limpieza de Costos Totales*/
function Limpiar_costos() {
	document.getElementById("costos").reset();
}
/*Costo Unitario*/
/*******************************************************/
function Costo_Unitario_Prod() {
	Total_Unidades = 0;
	Costo_Total = 0;
	$("#Unidades_U").each(function () {
		Total_Unidades = Total_Unidades + eval($(this).val());
	});
	$("#Costo_Total_U").each(function () {
		Costo_Total = Costo_Total + eval($(this).val());
	});
	cu = Costo_Total / Total_Unidades;
	dcu = cu.toFixed(2);
	$("#Costo_Unitario").val(dcu);

	Guardar_Historial_Costo_Unitario();
}

function Guardar_Historial_Costo_Unitario() {
	/*Obtencion de Datos*/
	var Datos_Cantidad_Unidades = $("#Unidades_U").val();
	var Datos_Costo_Total = $("#Costo_Total_U").val();
	var Resultado_Costo_Unitario = $("#Costo_Unitario").val();
	var Arr_Costo_unitario = [Datos_Cantidad_Unidades, Datos_Costo_Total, Resultado_Costo_Unitario];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('costo_unitario', JSON.stringify(Arr_Costo_unitario));
}

function Mostrar_Costo_Unitario() {
	/*Obtener datos almacenados*/
	var Arr_Costo_unitario = localStorage.getItem('costo_unitario');
	Arr_Costo_unitario = JSON.parse(Arr_Costo_unitario);
	
	if (Arr_Costo_unitario == "" || Arr_Costo_unitario == 0 || Arr_Costo_unitario == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Costo_Unitario").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Cos_Total").html("Costo Total = " + Arr_Costo_unitario[0]);
		$("#Cant_Unid").html("Cantidad de Unidades = " + Arr_Costo_unitario[1]);
		$("#Resultado_Cos_Uni").html("Resultado = " + Arr_Costo_unitario[2]);
		$("#Datos_Costo_Unitario").show();
	}
}

function Borrar_Costo_Unitario() {
	$('#Datos_Costo_Unitario').hide();
	localStorage.removeItem('costo_unitario');
	/*Limpiar datos almacenados*/
	$('#Cos_Total').html = "";
	$('#Cant_Unid').html = "";
	$('#Resultado_Cos_Uni').html = "";
	$("#Historial_Vacio").show();
}

/*Limpieza de Costos Unitarios*/
function Limpiar_costo() {
	document.getElementById("Unitario").reset();
}
/*Ganancia*/
/*******************************************************/
function Ganancia_R() {
	pvp = 0;
	Costo_unitario = 0;
	$("#pvp").each(function () {
		pvp = pvp + eval($(this).val());
	});
	$("#Costo_unitario").each(function () {
		Costo_unitario = Costo_unitario + eval($(this).val());
	});
	$("#ResultadoG").val(Math.round(pvp - Costo_unitario));
	Guardar_Historial_Ganancia();
}

function Guardar_Historial_Ganancia() {
	/*Obtencion de Datos*/
	var Datos_PVP = $("#pvp").val();
	var Datos_Costo_unitario = $("#Costo_unitario").val();
	var Resultado_Ganacia = $("#ResultadoG").val();
	var Arr_Ganancia = [Datos_PVP, Datos_Costo_unitario, Resultado_Ganacia];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Ganancia', JSON.stringify(Arr_Ganancia));
}

function Mostrar_Ganancia() {
	/*Obtener datos almacenados*/
	var Arr_Ganancia = localStorage.getItem('Ganancia');
	Arr_Ganancia = JSON.parse(Arr_Ganancia);
	
	if (Arr_Ganancia == "" || Arr_Ganancia == 0 || Arr_Ganancia == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Ganancia").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Cos_Unit").html("Precio de Venta al Publico = " + Arr_Ganancia[0]);
		$("#Precio_Venta").html("Costo Unitario = " + Arr_Ganancia[1]);
		$("#Resultado_Ganancia").html("Resultado = " + Arr_Ganancia[2]);
		$('#Datos_Ganancia').show();
	}
}

function Borrar_Ganancia() {
	$('#Datos_Ganancia').hide();
	localStorage.removeItem('Ganancia');
	/*Limpiar datos almacenados*/
	$('#Cos_Unit').html = "";
	$('#Precio_Venta').html = "";
	$('#Resultado_Ganancia').html = "";
	$("#Historial_Vacio").show();
}

/*Limpieza de Ganancia*/
function Limpiar_ganancia() {
	document.getElementById("ganancia").reset();
}
/*Indicadores*/
/*******************************************************/
function Indicadores() {
	Mes = 0;
	Material = 0;
	$("#Mes").each(function () {
		Mes = Mes + eval($(this).val());
	});
	$("#MaterialI").each(function () {
		Material = Material + eval($(this).val());
	});
	$("#ResultadoI").val(Mes / Material);
	Guardar_Historial_Indicadores();
}

function Guardar_Historial_Indicadores() {
	/*Obtencion de Datos*/
	var Datos_Mes = $("#Mes").val();
	var Datos_Material_Indicador = $("#MaterialI").val();
	var Resultado_Indicador = $("#ResultadoI").val();
	var Arr_Indicador = [Datos_Mes, Datos_Material_Indicador, Resultado_Indicador];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Indicador', JSON.stringify(Arr_Indicador));
}

function Mostrar_Indicadores() {
	/*Obtener datos almacenados*/
	var Arr_Indicador = localStorage.getItem('Indicador');
	Arr_Indicador = JSON.parse(Arr_Indicador);
	
	if (Arr_Indicador == "" || Arr_Indicador == 0 || Arr_Indicador == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Indicadores").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Histo_Mes_Indi").html("Cantidad de Meses = " + Arr_Indicador[0]);
		$("#Histo_Mate_Indi").html("Cantidad de Materiales = " + Arr_Indicador[1]);
		$("#Histo_Resul_Indi").html("Resultado = " + Arr_Indicador[2]);
		$('#Datos_Indicadores').show();
	}
}

function Borrar_Indicadores() {
	$('#Datos_Indicadores').hide();
	localStorage.removeItem('Indicador');
	/*Limpiar datos almacenados*/
	$('#Histo_Mes_Indi').html = "";
	$('#Histo_Mate_Indi').html = "";
	$('#Histo_Resul_Indi').html = "";
	$("#Historial_Vacio").show();
}

/*Limpieza de Indicadores*/
function Limpiar_indicadores() {
	document.getElementById("indicadores").reset();
}
/*Indices*/
/*******************************************************/
function Indices() {
	Estudio = 0;
	Base = 0;
	$("#Estudio").each(function () {
		Estudio = Estudio + eval($(this).val());
	});
	$("#Base").each(function () {
		Base = Base + eval($(this).val());
	});
	indice_p = (Estudio / Base) * 100;
	indice_R = (indice_p - 100);

	$("#ResultadoIN").val(indice_p);
	$("#ResultadoPOR").val(indice_R);

	Guardar_Historial_Indices();
}

function Guardar_Historial_Indices() {
	/*Obtencion de Datos*/
	var Datos_Estudio = $("#Estudio").val();
	var Datos_Base = $("#Base").val();
	var Resultado_Indi_Ent = $("#ResultadoIN").val();
	var Resultado_Indi_Por = $("#ResultadoPOR").val();
	var Arr_Indice = [Datos_Estudio, Datos_Base, Resultado_Indi_Ent, Resultado_Indi_Por];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Indice', JSON.stringify(Arr_Indice));
}

function Mostrar_Indices() {
	/*Obtener datos almacenados*/
	var Arr_Indice = localStorage.getItem('Indice');
	Arr_Indice = JSON.parse(Arr_Indice);
	
	if (Arr_Indice == "" || Arr_Indice == 0 || Arr_Indice == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Indices").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Histo_Indi_Estudio").html("Indicadores de Estudio = " + Arr_Indice[0]);
		$("#Histo_Indi_Base").html("Indicadores de Base= " + Arr_Indice[1]);
		$("#Histo_Indi_Result_Int").html("Resultado Entero = " + Arr_Indice[2]);
		$("#Histo_Indi_Result_Por").html("Resultado Porcentaje = " + Arr_Indice[3]);
		$('#Datos_Indices').show();
	}
}

function Borrar_Indices() {
	$('#Datos_Indices').hide();
	localStorage.removeItem('Indice');
	/*Limpiar datos almacenados*/
	$("#Histo_Indi_Estudio").html = "";
	$("#Histo_Indi_Base").html = "";
	$("#Histo_Indi_Result_Int").html = "";
	$("#Histo_Indi_Result_Por").html = "";
	$("#Historial_Vacio").show();
}

/*Limpieza de Indices*/
function Limpiar_indices() {
	document.getElementById("indices").reset();
}
/*Productividad en Funcion de los Materiales*/
/*******************************************************/
function Productividad_FM() {
	total_unidades = 0;
	total_materiales = 0;
	total = 0;
	$("#UnidadesM").each(function () {
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Materiales").each(function () {
		total_materiales = total_materiales + eval($(this).val());
	});
	total = (total_unidades / (total_unidades / total_materiales));
	$("#TotalPM").val(total);

	Guardar_Historial_Prod_Mat();

}

function Guardar_Historial_Prod_Mat() {
	/*Obtencion de Datos*/
	var Datos_Unidades_Material = $("#UnidadesM").val();
	var Datos_Cantidad_Material = $("#Materiales").val();
	var Resultado_TotalPM = $("#TotalPM").val();
	var Arr_Productividad_FM = [Datos_Unidades_Material, Datos_Cantidad_Material, Resultado_TotalPM];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Productividad_FM', JSON.stringify(Arr_Productividad_FM));
}

function Mostrar_Productividad_FM() {
	/*Obtener datos almacenados*/
	var Arr_Productividad_FM = localStorage.getItem('Productividad_FM');
	Arr_Productividad_FM = JSON.parse(Arr_Productividad_FM);
	
	if (Arr_Productividad_FM == "" || Arr_Productividad_FM == 0 || Arr_Productividad_FM == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Material").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Histo_Cant_Unit").html("Cantidad de Unidades = " + Arr_Productividad_FM[0]);
		$("#Histo_Cant_Mate").html("Cantidad de Materiales = " + Arr_Productividad_FM[1]);
		$("#Histo_Result_Mat").html("Resultado = " + Arr_Productividad_FM[2]);
		$('#Datos_Material').show();
	}
}

function Borrar_Productividad_Materiales() {
	$('#Datos_Material').hide();
	localStorage.removeItem('Productividad_FM');
	/*Limpiar datos almacenados*/
	$("#Histo_Cant_Unit").html = "";
	$("#Histo_Cant_Mate").html = "";
	$("#Histo_Result_Mat").html = "";
	$("#Historial_Vacio").show();
}

/*Limpiar Productividad en Funcion de los Materiales*/
function Limpiar_Materiales() {
	document.getElementById("Material").reset();
}
/*Productividad en Funcion de los Trabajadores*/
/*******************************************************/
function Productividad_FT() {
	total_unidades = 0;
	total_trabajadores = 0;
	$("#UnidadesT").each(function (index, value) {
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Trabajadores").each(function (index, value) {
		total_trabajadores = total_trabajadores + eval($(this).val());
	});
	ttf = total_unidades / total_trabajadores;
	cttf = ttf.toFixed(4);
	$("#Total_FT").val(cttf);

	Guardar_Historial_Prod_Trab();
}

function Guardar_Historial_Prod_Trab() {
	/*Obtencion de Datos*/
	var Datos_Unidades_Trabajador = $("#UnidadesT").val();
	var Datos_Cantidad_Trabajadores = $("#Trabajadores").val();
	var Resultado_Total_FT = $("#Total_FT").val();
	var Arr_Productividad_FT = [Datos_Unidades_Trabajador, Datos_Cantidad_Trabajadores, Resultado_Total_FT];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Productividad_FT', JSON.stringify(Arr_Productividad_FT));
}

function Mostrar_Productividad_FT() {
	/*Obtener datos almacenados*/
	var Arr_Productividad_FT = localStorage.getItem('Productividad_FT');
	Arr_Productividad_FT = JSON.parse(Arr_Productividad_FT);

	if (Arr_Productividad_FT == "" || Arr_Productividad_FT == 0 || Arr_Productividad_FT == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Trabajadores").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Histo_Cant_Unid_Tra").html("Cantidad de Unidades = " + Arr_Productividad_FT[0]);
		$("#Histo_Cant_Tra").html("Cantidad de Trabajadores = " + Arr_Productividad_FT[1]);
		$("#Histo_Result_Tra").html("Resultado = " + Arr_Productividad_FT[2]);
		$('#Datos_Trabajadores').show();
	}	
}

function Borrar_Productividad_Trabajadores() {
	$('#Datos_Trabajadores').hide();
	localStorage.removeItem('Productividad_FT');
	/*Limpiar datos almacenados*/
	$("#Histo_Cant_Unid_Tra").html = "";
	$("#Histo_Cant_Tra").html = "";
	$("#Histo_Result_Tra").html = "";
	$("#Historial_Vacio").show();
}

/*Limpiar Productividad en Funcion de los Trabajadores*/
function Limpiar_Trabajadores() {
	document.getElementById("Trabajadores1").reset();
}
/*Productividad Multifactorial*/
/*******************************************************/
function Productividad() {
	total_unidades = 0;
	Costo_Total = 0;
	$("#Unidades").each(function () {
		total_unidades = total_unidades + eval($(this).val());
	});
	$("#Costo_Total").each(function () {
		Costo_Total = Costo_Total + eval($(this).val());
	});
	$("#Resultado").val(total_unidades / Costo_Total);

	Guardar_Historial_Productividad();
}

function Guardar_Historial_Productividad() {
	/*Obtencion de Datos*/
	var Datos_Unidades_Productividad = $("#Unidades").val();
	var Datos_Costo_Total = $("#Costo_Total").val();
	var Resultado_Productividad = $("#Resultado").val();
	var Arr_Productividad = [Datos_Unidades_Productividad, Datos_Costo_Total, Resultado_Productividad];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Productividad', JSON.stringify(Arr_Productividad));
}

function Mostrar_Productividad() {
	/*Obtener datos almacenados*/
	var Arr_Productividad = localStorage.getItem('Productividad');
	Arr_Productividad = JSON.parse(Arr_Productividad);

	if (Arr_Productividad == "" || Arr_Productividad == 0 || Arr_Productividad == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Produccion").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Histo_Costo_Total").html("Cantidad de Unidades = " + Arr_Productividad[0]);
		$("#Histo_Unidades_Productividad").html("Cantidad de Trabajadores = " + Arr_Productividad[1]);
		$("#Histo_Resultado_Productividad").html("Resultado = " + Arr_Productividad[2]);
		$('#Datos_Produccion').show();
	}	
}

function Borrar_Productividad() {
	$('#Datos_Produccion').hide();
	localStorage.removeItem('Productividad');
	/*Limpiar datos almacenados*/
	$("#Histo_Costo_Total").html = "";
	$("#Histo_Unidades_Productividad").html = "";
	$("#Histo_Resultado_Productividad").html = "";
	$("#Historial_Vacio").show();
}

/*Productividad*/
function Limpiar_produc() {
	document.getElementById("Productividad").reset();
}

/*Rentabilidad*/
/*******************************************************/
function Rentabilidad() {
	pvp1 = 0;
	Costo_unitario1 = 0;
	$("#pvp1").each(function (index, value) {
		pvp1 = pvp1 + eval($(this).val());
	});
	$("#Costo_unitario1").each(function (index, value) {
		Costo_unitario1 = Costo_unitario1 + eval($(this).val());
	});
	$("#ResultadoR").val(Math.round((pvp1 / Costo_unitario1) * 100));

	Guardar_Historial_Rentabilidad();
}

function Guardar_Historial_Rentabilidad() {
	/*Obtencion de Datos*/
	var Datos_pvp_renta = $("#pvp1").val();
	var Datos_Costo_unitario_renta = $("#Costo_unitario1").val();
	var Resultado_rentabillidad = $("#ResultadoR").val();
	var Arr_Rentabilidad = [Datos_pvp_renta, Datos_Costo_unitario_renta, Resultado_rentabillidad];
	/*Guardar datos en un Arreglo*/
	localStorage.setItem('Rentabilidad', JSON.stringify(Arr_Rentabilidad));
}

function Mostrar_Rentabilidad() {
	/*Obtener datos almacenados*/
	var Arr_Rentabilidad = localStorage.getItem('Rentabilidad');
	Arr_Rentabilidad = JSON.parse(Arr_Rentabilidad);

	if (Arr_Rentabilidad == "" || Arr_Rentabilidad == 0 || Arr_Rentabilidad == null) {
		$("#Historial_Vacio").show();
		$("#Datos_Rentabilidad").hide();
	} else {
		$("#Historial_Vacio").hide();
		/*Mostrar datos almacenados*/
		$("#Histo_Cost_Unit").html("Precio Venta al Publico = " + Arr_Rentabilidad[0]);
		$("#Histo_pvp").html("Costo Unitario = " + Arr_Rentabilidad[1]);
		$("#histo_result_renta").html("Resultado = " + Arr_Rentabilidad[2]);
		$('#Datos_Rentabilidad').show();
	}	
}

function Borrar_Rentabilidad() {
	$('#Datos_Rentabilidad').hide();
	localStorage.removeItem('Rentabilidad');
	/*Limpiar datos almacenados*/
	$("#Histo_Costo_Total").html = "";
	$("#Histo_Unidades_Productividad").html = "";
	$("#Histo_Resultado_Productividad").html = "";
	$("#Historial_Vacio").show();
}

/*Rentabilidad*/
function Limpiar_rentabilidad() {
	document.getElementById("rentabilidad").reset();
}