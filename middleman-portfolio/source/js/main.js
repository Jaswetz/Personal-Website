/////////////////////////////
// Contact form submission //
/////////////////////////////

$(function() {
	
	var form = $('#contact');
	
	$("#contact .button").click(function(e) {

		e.preventDefault();

		if (($("#visitors-name").val() == "") or 
		    ($("#visitors-email").val() == "") or 
		    ($("#visitors-message").val() == "")) { 
                    alert("You forgot one of the fields, please make sure they are all filled out."); 
		} else {

			$.ajax({

				type: "POST",
				url: "../php/contact.php",
				data: form.serialize(),
				success: function(){

					$('.success').fadeIn(1000);

				}
			});
		}

	});

	return false;

});
