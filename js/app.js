$(document).ready(function(){

	$(".user-input").submit(submitValue); 


	function submitValue(e){

	   // Prevent page to reload
	   e.preventDefault();
	   // Clean div#content
	   $("#content").html('');
	   // Take the user given value
	   var value = $('.user-input__value').val();

	   // Check if the given value is a whole number lower than 500 and, if so, do fizzBuzz 

	   if (!isNaN(+value) && +value%1 === 0 && +value <= 500) {
	   	fizzBuzz(+value)
	   }

	   if (!isNaN(+value) && +value%1 === 0 && +value > 500) {
	   	alert("Please, submit a number lower than 500");
	   }

	   if (!isNaN(+value) && +value%1 != 0) {
	   	alert("Please, submit a whole number");
	   }
	   if (isNaN(+value)) {
	   	alert("Please, submit a numeric value");
	   }

	   $('.user-input__value').val('');
	}
	
	// Do fizzBuzz from 1 to the given value
	
	function fizzBuzz(number){

		for ( var i = 1; i < number; i++) {

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
	}

});



