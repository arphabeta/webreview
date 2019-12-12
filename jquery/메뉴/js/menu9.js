$(document).ready(function(){

	$(".gnb>li").click(function(){
		$(".gnb>li").not(this).find("ul").stop(true,true).slideUp(200);
		//기존 열려있는 메뉴를 다른 메뉴를 클릭할때 올라가게 함
		$(this).find("ul").stop(true,true).slideToggle(200);
	});
			
});