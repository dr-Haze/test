function hideActions(){
	$('nav ul').slideUp(350);
}

$(document).ready(function() {
	$('select').myDropdown();

	// (function(d, s, id) {
	// 	var js, fjs = d.getElementsByTagName(s)[0];

	// 	if (d.getElementById(id)) {
	// 		return;
	// 	}

	// 	js = d.createElement(s);
	// 	js.id = id;
	// 	js.src = "//connect.facebook.net/en_EN/all.js#xfbml=1&version=v2.3";
	// 	fjs.parentNode.insertBefore(js, fjs);
	// }(document, 'script', 'facebook-jssdk'));

	$('#mobile-menu').on('click', function() {
		event.stopPropagation();
		hideActions();
		$(this).next().stop().stop().slideToggle(350);
	});

	$('body').on('click', function() {
		hideActions();
	});

	$(".rslides").responsiveSlides({

	});
});