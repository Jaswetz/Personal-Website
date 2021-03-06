
/////////////
// Plugins //
/////////////

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){

///////////////////////////////////
// eMail address Spam Protection //
///////////////////////////////////

var emailAddress = ('swetzoff@' + 'gmail.com');
$('#contact-link span').append(emailAddress);

/////////////////////////////
// Contact form submission //
/////////////////////////////

$(function() {
	
	var form = $('#contact');
	
	$("#contact .button").click(function(e) {

		e.preventDefault();

                if (($("#visitors-name").val() == "") ||
                    ($("#visitors-email").val() == "") ||
                    ($("#visitors-message").val() == "")) {
                    $('#notification').html("Please make sure all fields are filled out.").fadeIn(1000).delay(3000).fadeOut(1000);
                } else {

			$.ajax({

				type: "POST",
				url: "../php/contact.php",
				data: form.serialize(),
				dataType: 'json',
				success: function(){
                                        
                                        if (!data.result) { $('#notification').html("Message could not be sent").fadeIn(1000).delay(3000).fadeOut(1000); }
                                        else { $('#notification').html("Your message has been sent!").fadeIn(1000).delay(3000).fadeOut(1000); }

					//$('.success').fadeIn(1000);
				}
			});
		}
                
        
	});

	return false;
});


 ///////////////////
 // Smooth Scroll //
 ///////////////////
 
 function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

});
