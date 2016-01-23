$(document).ready(function (){
	 $('div.resume').hide();
	$('.lead-in').on('click', function(){
		$('.resume').show();
		$('.button').fadeOut();
		$('.intro').fadeIn("slow").addClass('intro-image');
		// $('.lead-in').addClass('small-header');
	});
});