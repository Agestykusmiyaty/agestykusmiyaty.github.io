
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".sekali").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var sekaliID = el.id.split('_')[1];
		$('.sekali#' + sekaliID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.sekali:visible').fadeOut('medium', function() {
		$('.sekali#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});