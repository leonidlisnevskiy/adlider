console.log("WELL DONE!");

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
		breakpoint: 481,
		settings: {
			arrows: false
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