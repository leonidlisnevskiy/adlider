console.log('common');



$(document).ready(function() {

	// transparent input, etx
	$('input').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	// map scroll disable
	$('.map-container').click(function () {
		$('.map-container iframe').css("pointer-events", "auto");
	});

	$( ".map-container" ).mouseleave(function() {
		$('.map-container iframe').css("pointer-events", "none");
	});

});