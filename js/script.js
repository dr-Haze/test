$(window).load(function() {
	$("#slider").responsiveSlides({
		speed: 1000
	});
	
	if ($(window).width() <= 880) {
		menu.addClass('mobile-list');
	}
});

$(document).ready(function() {
	$('select').myDropdown();

	var mobileMenu = $('#mobile-menu');
	var menu = $('nav ul');

	$(mobileMenu).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();

		if (w > 880 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});
