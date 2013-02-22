/////////////////////////////
// Contact form submission //
/////////////////////////////




$(document).ready(function(){
	$('body').jKit();

	$(function() {
	
	var form = $('#contact');
	
	$("#contact .button").click(function(e) {

		e.preventDefault();

		if (($("#visitors-name").val() == "") || 
		    ($("#visitors-email").val() == "") || 
		    ($("#visitors-message").val() == "")) { 
                    alert("Please make sure all the fields are filled out."); 
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

});
