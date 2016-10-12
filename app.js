$(document).ready(function(){
	"use strict";
	var compteur=0;

	

	$('#valid').click(function(){
		var recupInput = $('#ok').val();
		compteur++;
		$("ul").append('<li><input type="checkbox" class="checkboxin">'+recupInput+'</li>');
		$('.checkboxin').click(function(){
		var checked = $('.checkboxin').is(':checked');
			if(checked){
				$(this).parent().addClass("raye");
			}else{
				$(this).parent().removeClass();
 
			}
		});	

	});
});


