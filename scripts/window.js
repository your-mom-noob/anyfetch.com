var topFix = function() {
	console.log($('#top').height());
	// $('#frames').css({top: $('#top').height()});
}

$(function() {
	topFix();
});

$(window).resize(function() {
	topFix();
});