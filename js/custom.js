(function(window, undefined) {
	var pathname = window.location.pathname;

	$(".navbar-nav a").each(function(index) {
	    if (pathname.toUpperCase().indexOf($(this).text().toUpperCase()) != -1)
	        $(this).parent().addClass("active");
	});

	if ($("li.active").length == 0)
	    $("a#index").parent().addClass("active");
}(window));