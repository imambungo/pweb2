//<![CDATA[
$(window).on('load', function () { // makes sure the whole site is loaded 
	$('#preloader').delay(50).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(50).css({
		'overflow': 'hidden'
	});
})
//]]>