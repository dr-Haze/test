$(document).ready(function() {
	$('select').myDropdown();

	$('#slider ul').rhinoslider({
		effect: 'fade',
		controlsMousewheel: false,
		showControls: 'never',
		showBullets: 'never',
		controlsPrevNext: false,
		controlsPlayPause: false,
		autoPlay: true,
		captionsOpacity: 0.2,
		captionsFadeTime: 750,
		controlsKeyboard: false,
		showTime: 10000,
		changeBullets: 'before',
		prevText: '',
		nextText: '',
		cycled: true
	});
});