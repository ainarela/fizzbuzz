$(document).ready(function(){

	for ( var i = 1; i < 101; i++) {

		if ( i%3 === 0 && i%5 === 0) {
			$("#content").append("<p>fizz buzz</p>");
		}
		else if ( i%3 === 0) {
			$("#content").append("<p>fizz</p>");
		}
		else if ( i%5 === 0) {
			$("#content").append("<p>buzz</p>");
		}
		else {
			$("#content").append("<p>"+i+"</p>");
		}

	}

});



