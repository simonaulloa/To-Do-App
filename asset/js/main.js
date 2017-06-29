$(document).ready(function(){
	$('.lista').html(localStorage.getItem('listItems')); // localstorage; almacenar datos localmente en el navegador del usuario
	
	$("button").click(function(e){ // esto es para que imprima lo que entra en el input
		e.preventDefault();
		var tarea = $("#agregartarea").val();
		if(tarea == ""){
			alert("Debes escribir algo en tu lista");
		} else{
			$('.lista').append('<li><input class="center-align" type="checkbox" id="lista" checked="checked" /><label for="lista">'+tarea+'</li>' );
		}
	});
});