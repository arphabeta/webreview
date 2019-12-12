$(document).ready(function(){

	$(".allmenu h3").click(function(){
		$(this).toggleClass("mclose");
		$(".allmenu div").slideToggle("slow");
	});

});