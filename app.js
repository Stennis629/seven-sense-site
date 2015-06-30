//Capturing #nav-links click event
var $overlay = $('<div id="overlay"></div>');
var $anchor = $('<a></a>');

$overlay.append($anchor);
$("body").append($overlay);


$("#nav-links a").click(function(event){
	event.preventDefault();
	var pageLocation = $(this).attr("href");
	$anchor.attr("href", pageLocation);
	$overlay.show();
});

$overlay.click(function(){
	$overlay.hide();
});