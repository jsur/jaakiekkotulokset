$(function() {

	$("#openbtn").click(function() {
		$("#myNav").css({"height": "100%"});
		$("#openbtn").css({"display": "none"});
	});

	$("#closebtn").click(function() {
	    $("#myNav").css({"height": "0%"});
	    $("#openbtn").css({"display": "block"});
	});

	/*Source: http://jsfiddle.net/giorgitbs/52ak9/1/*/
    (function ($) {

        $('#filter').keyup(function () {

            var rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function () {
                return rex.test($(this).text());
            }).show();

        })

    }(jQuery));

});