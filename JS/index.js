$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
	$('#boton').click(onClickBtn);

	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnSaludo() {
	
	gotoSection('nombres');
}

function onClickBtnNombre() {
	var jugadorUno = $('#uno');
	var jugadorDos = $('#dos');
	console.log(jugadorUno.val());
	if (jugadorUno.val()=='' || jugadorDos.val()=='') {
		alert('Necesita llenar campos');
	}else{
		gotoSection('juego');
	} 
	
	
	
	
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	currentSection.css('display','none');
	var nextSection = $('#'+_identificadorDeSeccion);
	console.log(nextSection);
	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}

function onClickBtn(){
	window.location.reload();
}