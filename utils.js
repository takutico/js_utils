function filter(){
	var filterData = $('#filter_data').val();
	var url = window.location.href;
	var index = url.indexOf('?');
	var params = $.param( { filterData: filterData } );
	if(index != -1) url = url.substring(0, index);
	url += "?" + params
	window.location.href = url;
}

function getParameterByName(name) {
	/* function that get parameter from url */
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$( document ).ready( function() {
	/* add class depending of image size */
	$(".imgContainer").each(function(){
        var imgClass = (this.width/this.height > 1) ? 'portrait' : 'landscape';
        $(this).addClass(imgClass);
	})
});
