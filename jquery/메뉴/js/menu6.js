$(document).ready(function(){

	$(".gnbMenu").mouseenter(function(){
		$(this).find("li>.smenu").stop(true,true).slideDown();
		$(".bg_box").stop(true,true).slideDown();
	});

	$("#header").mouseleave(function(){
		$(this).find("li>.smenu").stop(true,true).slideUp();
		$(".bg_box").stop(true,true).slideUp();
	});

});











