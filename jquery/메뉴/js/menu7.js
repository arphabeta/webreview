$(document).ready(function(){

	//서브박스배경색
	$(".topmenu>li").hover(function(){	
		$(this).find("ul").css({"background":"#f4f3f3"});
	},function(){	
		$(this).find("ul").css({"background":"#fff"});
	});



	//주메뉴 오버시 서브메뉴 풀다운 내리고 올리고...	

	$(".top_nav").mouseenter(function(){
		$(this).find("li>.smenu").stop(true,true).slideDown();
		$(".bg_box").stop(true,true).slideDown();
	});

	$("#header").mouseleave(function(){
		$(this).find("li>.smenu").stop(true,true).slideUp();
		$(".bg_box").stop(true,true).slideUp();
	});

});











