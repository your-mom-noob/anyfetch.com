

// Smooth scroll
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 300);
				return false;
			}
		}
	});
});


$(document).ready(function(){
	$("#subscribe").submit(function() {
		//Do the AJAX post
		$.post($("#subscribe").attr("action"), $("#subscribe").serialize(), function(data){
			if (data == "OK") {
				$("#success").show();
			} else {
				$("fail").show();
			}
		});
		//Important. Stop the normal POST
		return false;
	});

	$( ".carousel-button" ).click(function() {
		$('#carousel-example-generic').carousel('pause')
	});
});
