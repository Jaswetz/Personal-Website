
// Main Menu Dropdown


$(document).ready(function() {

	$('header #nav').removeClass('active');

	$('header #main-toggle').click(function(){
		$('header #nav').toggleClass('active');
		// alert("Pressed");
		return false;
	});

});

