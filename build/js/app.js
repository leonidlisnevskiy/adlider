console.log("WELL DONE!");

if (window.jQuery){
	jQuery.noConflict();
	jQuery(document).ready(function($){

		var $sliderReview = $(".js-slider-review");
		$sliderReview.slick({
			arrows: true,
			// autoplay: true,
			draggable: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true
				}
			},
			{
				breakpoint: 568,
				settings: {
					arrows: false,
					dots: true
				}
			}
			]
		});

		var $sliderFix = $(".js-slider-fix");
		$sliderFix.slick({
			responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			}
			]
		});

		// $(window).load(function(){
		// 	$(".js-slider-review").on('beforeChange', function (event, slick, currentSlide, nextSlide){
		// 		if(nextSlide==$(slick.$slides).length-1)nextSlide=-1;
		// 		var nextTitle = $(slick.$slides[nextSlide+1]).find('.preview__title').text();

		// 		var prevSlide = nextSlide-1;
		// 		if(nextSlide==-1)prevSlide=$(slick.$slides).length-2;
		// 		if(nextSlide==0)prevSlide=$(slick.$slides).length-1;

		// 		var prevTitle = $(slick.$slides[prevSlide]).find('.preview__title').text();
		// 		$('.js-slider-review .slick-next').html('<span>'+nextTitle+'</span>');
		// 		$('.js-slider-review .slick-prev').html('<span>'+prevTitle+'</span>');
		// 	});

		// 	$(".js-slider-review").on('init', function (event, slick){
		// 		var nextTitle = $(slick.$slides[1]).find('.preview__title').text();
		// 		var lastSlide = $(slick.$slides).length-1;
		// 		var prevTitle = $(slick.$slides[lastSlide]).find('.preview__title').text();
		// 		$('.js-slider-review .slick-next').html('<span>'+nextTitle+'</span>');
		// 		$('.js-slider-review .slick-prev').html('<span>'+prevTitle+'</span>');
		// 	});
		// });


		video_frame();
		$(window).resize(function(){
			video_frame();
		});
		function video_frame(){
			var video_box = $('.video-holder'),
			img_box = $('.mobile-image');

			video_box.each(function(){
				var wrap_box = $(this),
				wrap_parent = $(".out").width();

				wrap_box.css('left', -(wrap_box.width() - wrap_parent) / 2)
				img_box.children('img').css('left', -(wrap_box.width() - wrap_parent) / 2)
			});
		};

		$body = $("body");
		$window = $(window);

		$window.scroll(function(){
			if ( $window.scrollTop() > 0) {
				$body.addClass("is-fixed");
			} else{
				$body.removeClass("is-fixed");
			}
		});

		$('.js-scroll-to').on("click", function(e){
			e.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
		});

		$('.navbar').affix({
			offset: {
				top: $('.navbar ').height()
			}
		});

	});
};