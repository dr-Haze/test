$(window).load(function() {
	$("#slider").responsiveSlides({
		speed: 1000
	});
});

$(document).ready(function() {
	$('select').myDropdown();
	
	mobileClass();

	var mobileMenu = $('#mobile-menu');
	var menu = $('nav ul');

	$(mobileMenu).on('click', function(event) {
		event.stopPropagation();
		menu.slideToggle();
	});
	
	$('body').on('click', function() {
		$('.mobile-list').slideUp();
	});

	$(window).resize(function(){
		mobileClass();
		
		var w = $(window).width();

		if (w > 880 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});

function mobileClass() {
	if ($(window).width() <= 880) {
		$('nav ul').addClass('mobile-list');
	} else $('nav ul').removeClass('mobile-list');
}
