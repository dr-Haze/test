$(window).load(function() {
	$("#slider").responsiveSlides({
		speed: 1000
	});
});

$(document).ready(function() {
	$('select').myDropdown();

	function hideActions(){
		$('nav ul').slideUp(350);
	};

	$('#mobile-menu').on('click', function() {
		event.stopPropagation();
		hideActions();
		$(this).next().stop().stop().slideToggle(350);
	});

	$('body').on('click', function() {
		hideActions();
	});
});