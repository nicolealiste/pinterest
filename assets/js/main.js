$(document).ready(function() {
	$('.modal').hide();
	var firstHalf = info.slice(0, 20);
	var secondHalf = info.slice(20, 41);
	var counter = 0;

	firstHalf.forEach(function(elem){
		contenidoYModal(elem);
	})

	function contenidoYModal(elem){
		var alto;
		if(elem.id%2 == 0){
			alto = 430;
			$('.circulo-color').css("background-color", "#d597a1");
		} else{
			alto = 380;
			$('.circulo-color').css("background-color", "#ffcf5c");
		}
		$('#imagenes').append('<div class="post" id="'+elem.id+'">'+
			'<img src="dist/img/'+ elem.id +'.jpg" height="'+ alto +'">'+
			'<div class="text">'+
				'<h4>'+elem.title+'</h4>'+
				'<p>'+elem.description+'</p>'+
				'<div class="porcion-usuario">'+
					'<div class="circulo-color"><span class="usuario-circulo">'+elem.username.charAt(0).toUpperCase()+'</span></div>'+
					'<span class="usuario-nombre">'+elem.user+'</span> '+
					'<span class="hashtag"> #'+elem.hashtag+'</span>'+
				'</div>'+
			'</div>'+
			'<div class="views">'+
				'<span> <i class="fa fa-thumb-tack" aria-hidden="true"></i> 36,6k <i class="fa fa-check" aria-hidden="true"> '+elem.id*7+'</i></span>'+
			'</div>'+
			'</div>');

		counter++;

		$("#"+elem.id).click(function(){
			$('.modal').show();
			$('.modal').empty();
			$('#imagenes').append('<div class="modal">'+
				'<div class="close">'+
					'<i class="fa fa-times fa-2x" aria-hidden="true"></i>'+
				'</div>'+
				'<div class="cuadro-blanco">'+
					'<div class="contenedor-save">'+
						'<li><a href="#"><i class="fa fa-upload fa-lg" aria-hidden="true"></i></a></li>'+
						'<li><a href="#"><i class="fa fa-check fa-lg" aria-hidden="true"></i></a></li>'+
						'<li><a href="#"><i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></a></li>'+
						'<li class="right"><a href="#"><i class="fa fa-thumb-tack fa-lg" aria-hidden="true"></i> Save</a></li>'+
					'</div>'+
						'<h2>'+elem.title+'</h2>'+
						'<img src="dist/img/'+ elem.id +'.jpg" alt="">'+
					'<div class="contenedor-texto">'+
						
						'<div class="circulo-color2"><span class="usuario-circulo2">'+elem.username.charAt(0).toUpperCase()+'</span></div>'+
						
						'<span>'+ elem.user +'</span>'+
						'<p class="hashtag2"> #'+elem.hashtag+'</p>'+	
						'<div class="modal-descrip"><p>'+ elem.description +'</p></div>'+
					'</div>'+	
				'</div>'+
			'</div>');
			$('.close').click(function(){
				$('.modal').hide();
			})
		})
	}

	$('.loading').hide();
	//funcion de Scroll to the Bottom
	$(window).scroll(function() {   
    	if($(window).scrollTop() + $(window).height() == $(document).height()) {
        	$('.loading').show();
			console.log(counter);
			if(counter==20){
				secondHalf.forEach(function(elem){
					contenidoYModal(elem);
				})
			} else{
				$('.loading').hide();
				return false;
			}
			$('.loading').hide();
    	}
	});
});