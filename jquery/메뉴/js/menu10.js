$(document).ready(function(){
	
	//주메뉴 클릭시 서브메뉴 나오게 함
	$(".nav>ul>li").click(function(){

		var num1=$(this).index();
		$(".nav_in2").eq(num1).animate({"left":"0"});
		//서브메뉴가 주메뉴 위치로 오게 함
		$(".nav>ul").animate({"margin-left":"-200px"});
		//주메뉴는 서브메뉴가 올때 왼쪽밖으로 위치하게 함

	});


	//서브메뉴 클릭시 다시 주메뉴 나오게 함
	$(".nav_in2 li:first-child").click(function(){
		$(".nav_in2").animate({"left":"200px"});
        $(".nav>ul").animate({"margin-left":"0"});
	});

});