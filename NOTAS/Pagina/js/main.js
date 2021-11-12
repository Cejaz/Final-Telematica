$(function(){
	set_addField();

	$('#notaMax').focusout(function(){
		$('#notaDeseada').attr('max', $(this).val());
		$('#notaBase').attr('max', $(this).val());
	});

	$('#notaMin').focusout(function(){
		$('#notaDeseada').attr('min', $(this).val());
		$('#notaBase').attr('min', $(this).val());
	});
});

var nextInput = 0;
var cantInput = 0;

var nota_min = $('#notaMin').val();
var nota_max = $('#notaMax').val();
var nota_base = $('#notaBase').val();
var nota_deseada = $('#notaDeseada').val();


function set_addField()
{
	nextInput++;
	cantInput++;

	var fieldToRemove = "campo_fila" + nextInput;
	field = "<div id='campo_fila" + nextInput + "' class='row valign-wrapper'>";

		field += "<div class='col s11'><div class='input-field col s6'>";
		field += "<input type='number' step='0.01' min="+ nota_min +" max="+ nota_max +" id='nota" + nextInput + "' class='nota validate' required/>";
		field += "<label for='nota" + nextInput + "'>Nota:</label>";
		field += "</div>";

		field += "<div class='input-field col s6'>";
		field += "<input type='number' step='0.01' min='0' max='100' id='porcentaje" + nextInput + "' class='porcentaje validate' required/>";
		field += "<label for='porcentaje" + nextInput + "'>Porcentaje %</label>";
		field += "</div></div>";

		if(nextInput > 1)
			field += "<div class='col s1'><a href='javascript:void(0)' onclick='set_delField(\""+ fieldToRemove +"\")' class='right'><i class='small mdi-action-highlight-remove'></i></a></div>";

	field += "</div>";

	$(".notas").append(field);
};

function set_delField(field)
{
	cantInput--;
	nextInput--;
	$("#"+field).remove();
}

function set_calculateScore()
{
	var notas = [];
	var porcentaje = [];
	var porcentaje_restante = 100;

	$(".nota").each(function(){
		notas.push($(this).val());
	});
	$(".porcentaje").each(function(){
		isdecimal = $(this).val() * 100;
		if (isdecimal < 100) 
		{
			porcentaje.push($(this).val() * 100);
			porcentaje_restante -= $(this).val() * 100;	
		}
		else 
		{
			porcentaje.push($(this).val());
			porcentaje_restante -= $(this).val();
		}
	});

	if(porcentaje_restante < 0)
		 display_error();
	else if (porcentaje_restante == 0) 
	{
		var valor_notas = 0;
		var estado;
		
		for(var i = 0; i < notas.length; i++)
		{
			valor_notas += ( notas[i] * (porcentaje[i] / 100) );
		}
		valor_nota_final = Math.round( valor_notas * 100 ) / 100;
		show_modal('final', valor_nota_final);
	}
	else
	{
		var valor_notas = 0;
		var estado;
		
		for(var i = 0; i < notas.length; i++)
		{
			valor_notas += ( notas[i] * (porcentaje[i] / 100) );
		}

		valor_nota_final = ( nota_deseada - valor_notas ) / ( porcentaje_restante / 100 );
		valor_nota_final = Math.round( valor_nota_final * 100 ) / 100;


		if ( valor_nota_final > nota_max ) 
		{
			estado = 'mal';
		}
		else if ( valor_nota_final > nota_base && valor_nota_final <= nota_max )
		{
			estado = 'normal';
		}
		else if (valor_nota_final > nota_min && valor_nota_final <= nota_base) 
		{
			estado = 'bien';
		}
		else if (valor_nota_final <= nota_min)
		{
			estado = 'mejor';
			valor_nota_final = null;
		}
		porcentaje_restante = Math.round( porcentaje_restante * 100 ) / 100;
		show_modal(estado, valor_nota_final, porcentaje_restante);

	}
}

function set_settings()
{
	nota_min = $('#notaMin').val();
	nota_max = $('#notaMax').val();
	nota_base = $('#notaBase').val();
	nota_deseada = $('#notaDeseada').val();
	refresh_inputs();
	update_settingsInputs();
	$('#modal_settings').closeModal();
}

function refresh_inputs()
{
	$(".nota").each(function(){
		$(this).attr('min', nota_min);
		$(this).attr('max', nota_max);
	});
}

function update_settingsInputs(){
	$('#notaMin').attr('value', nota_min);
	$('#notaMax').attr('value', nota_max);
	$('#notaBase').attr('value', nota_base);
	$('#notaDeseada').attr('value', nota_deseada);
}

function show_modal(modal_box, valorNota, porcentajeRestante)
{
	$(".modal_box").each(function(){
		$(this).hide();
	});

	modal = "#modal_" + modal_box;
	$(modal + " .notatxt").html(valorNota);
	$(modal + " .porcentajetxt").html(porcentajeRestante + " %");
	$(modal).show();
	$('#modal_mensaje').openModal();
}

function display_error()
{
	$('.alert-error').stop().slideDown().delay(2000).slideUp();
}