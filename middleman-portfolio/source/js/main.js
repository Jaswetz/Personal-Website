

$(document).ready(function(){

///////////////////////
// Feature Detection //
///////////////////////

// // Create input element for testing
// var input = document.createElement('input');

// // Create the supports object
// var supports = {};

// supports.autofocus   = 'autofocus' in input;
// supports.required    = 'required' in input;
// supports.placeholder = 'placeholder' in input;


//////////////////////
// Form Submissions //
//////////////////////
$(function() {
	$("#contact .button").click(function(e) {
		// console.log("Submitted form pushed");

		e.preventDefault();

		var name = $("#visitors-name").val();
		var email = $("#visitors-email").val();
		var text = $("#visitors-message").val();

		var dataString = 'name='+ name + '&email=' + email + '&text=' + text;

		$.ajax({

		type: "POST",
		url: "../php/contact.php",
		data: dataString,
		success: function(){

			$('.success').fadeIn(1000);

		}
		});

	});

	return false;

});

});
