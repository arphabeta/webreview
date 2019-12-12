$(document).ready(function(){


	$(".gnbMenu").mouseenter(function(){
		$(this).find("li>.smenu").stop(true,true).slideDown();
	});

	$("#header").mouseleave(function(){
		$(this).find("li>.smenu").stop(true,true).slideUp();
	});

});











