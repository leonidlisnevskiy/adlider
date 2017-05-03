console.log("WELL DONE!");

//autosize
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


$(document).ready(function() {

		//animate scroll
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

		var $sliderReview = $(".js-slider-review");
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

		$sliderReview.slick({
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			draggable: false,
			dots: true,
			arrows: true,
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
	});

