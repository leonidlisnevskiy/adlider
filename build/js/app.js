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

	$('.navbar').affix({
		offset: {
			top: $('.navbar ').height()
		}
	});

	var $sliderPreview = $(".js-slider-preview");
	var $sliderReview = $(".js-slider-review");

	$sliderPreview.slick({
		slidesToShow: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}
		]
	});


	$sliderReview.slick({
		slidesToShow: 1,
		dots: true,
		arrow: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}
		]
	});
});

