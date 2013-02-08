/////////////////////////////
// Contact form submission //
/////////////////////////////

$(function() {
	
	var form = $('#contact-form').find('form');
	
	$("#contact .button").click(function(e) {

// 		console.log("Submitted form pushed");

		e.preventDefault();

//		var name = $("#visitors-name").val();
//		var email = $("#visitors-email").val();
//		var text = $("#visitors-message").val();
//		var dataString = 'name='+ name + '&email=' + email + '&text=' + text;

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
