/////////////////////////////
// Contact form submission //
/////////////////////////////

$(function() {
	
	var form = $('#contact');
	
	$("#contact .button").click(function(e) {

		e.preventDefault();

		$.ajax({

			type: "POST",
			url: "../php/contact.php",
			data: form.serialize(),
			success: function(){

				$('.success').fadeIn(1000);

			}
		});

	});

	return false;

});
