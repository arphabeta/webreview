$(document).ready(function(){

	//top menu over------------------------
	$(".topmenu>.m1").hover(function(){
		$(this).find(".m2").stop(true,true).animate({marginTop:"-65px"},250);
	},function(){
		$(this).find(".m2").stop(true,true).animate({marginTop:"0px"},250);
	});


	//스크롤시 내려오는 고정된 탑메뉴---------
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$(".nav_fix").css("margin-top","0px");
		}else{
			$(".nav_fix").css("margin-top","-100px");
		}

	});

//이미지
$(".image-wrapper").hover(function(){
	$(this).find("strong,span").stop(true,true).animate({opacity:1},300);
},function(){
	$(this).find("strong,span").stop(true,true).animate({opacity:0},300);
});


//탭메뉴
$(".tab li").click(function(){
	val=$(this).index();
	num=+120*val; //가로폭 120px 씩 증가됨
	$(".tab-header .tab-highlight").animate({"left":num});
	$(".tab li a").css("color","#000"); //탭의 모든 글자색
	$(this).find(">a").css("color","#fff"); //선택된 탭의 글자색

	$(".panel li").hide(); //기존의 보여진 내용 숨기기
	$($(this).find(">a").attr("href")).stop(true,true).fadeIn();
	//선택된 탭의 내용 href 연결된 내용 보여주기
});

//top버튼을 클릭하면 맨 위로 올리기
$(".top_btn a").click(function(){
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
});

});
