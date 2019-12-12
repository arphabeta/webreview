$(document).ready(function(){

	$(".gnb>li").hover(function(){
		$(this).find(">.submenu").stop(true,true).slideDown();
	},function(){
		$(this).find(">.submenu").stop(true,true).slideUp();
	});

});
