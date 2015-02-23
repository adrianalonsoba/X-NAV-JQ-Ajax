
jQuery(document).ready(function() {

	var ax= $.ajax({type: "GET",
					url:"text",
					cache:false
	});

	ax.done(function(text){
		$("#boton1").html(text);
	});

	$('#boton2').click(function(){
		var ax2= $.ajax({type: "GET",
						url:"text2",
						cache:false
		});

		ax2.done(function(text){
			$("#boton1").html(text);
		});
	});

});

