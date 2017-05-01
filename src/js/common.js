console.log('common');


$(document).click(function(event) {
	if ($(event.target).closest(".js-btn-nav").length) return;
	$("body").removeClass("is-open");
	event.stopPropagation();
});

$(document).click(function(event) {
	if ($(event.target).closest(".js-lang").length) return;
	$(".header__lang").removeClass("is-open");
	event.stopPropagation();
});

$(document).ready(function() {

	// modal window
	window.popup = {
		open: function() {
			$('.js-popup').addClass('is-active');
		},
		close: function() {
			$('.js-popup').removeClass('is-active');
		}
	};

	$(document).on('click', function(e) {
		if (!$('.js-popup').hasClass('is-active')) return;
		if ($(e.target).closest('.js-popup-container').length) return;
		if ($(e.target).closest('.js-popup-open').length) return;
		$('.js-popup').removeClass('is-active');
	});

	// accordion
	$(".js-accordion-link").click(function(e){
		e.preventDefault();

		var thisBlock = $(this).parent().index('.js-accordion-box');
		$(".js-accordion-box").find(".is-active").not($(this)).removeClass("is-active");
		$(this).toggleClass("is-active").next().slideToggle("fast");
		$(this).parent().toggleClass("is-active").siblings()
		.removeClass("is-active").children(".accordion__container").hide("fast");
		return false;
	});



	// Select2 Disable Search Field
	// $(".js-select").select2({
	// 	minimumResultsForSearch: -1
	// });

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

	// burger
	$body = $('body');

	$(".js-btn-nav").click(function(){
		$('body').toggleClass('is-open');
	});

	// map scroll disable
	$('.map-container').click(function () {
		$('.map-container iframe').css("pointer-events", "auto");
	});

	$( ".map-container" ).mouseleave(function() {
		$('.map-container iframe').css("pointer-events", "none");
	});

	//roundSlider
	// $(".js-circle-default").roundSlider({
	// 	sliderType: "min-range",
	// 	width: 20,
	// 	circleShape: "full",
	// 	handleSize: "30,0",
	// 	editableTooltip: false,
	// 	readOnly: true,
	// 	startAngle: "-180",
	// 	radius: 70,
	// 	value: 14000,
	// 	max: 16000
	// });
});