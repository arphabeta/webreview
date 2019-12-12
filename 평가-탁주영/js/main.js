/*평가-탁주영*/

$(document).ready(function(){


  /*======================1번 ===================*/

  $(".topmenu").hover(function(){
    $(".smenu").show().stop(true,true).animate({top:"45px"},1000);
  },function(){
    $(".smenu").animate({top:"-320px"},1000).hide();
  });


  /*======================2번 ===================*/

  var img_w= $(".slide ul li").width();  //이미지의 가로너비
	var img_n= $(".slide ul li").length;  //이미지의 총개수
	var oldidx=0;
	var index=0;


	//index번째 비주얼이미지 출력
	function slideImg(index){

		targetX=-(index*img_w); //움직이는 거리(너비)

		$(".slide ul").animate({left:targetX},600);
		$(".slide_btn ul li").eq(oldidx).removeClass("active");
		$(".slide_btn ul li").eq(index).addClass("active");
		oldidx=index;

	}


	//슬라이드 자동함수 생성
	function slideAuto(){

		index++;
		if(index==img_n){
			index=0;
		}
		slideImg(index); // currentIndex 번째 이미지 출력

	}

	auto=setInterval(slideAuto,4000);


	//하단버튼 클릭
	$(".slide_btn ul li").click(function(){

		clearInterval(auto);  //버튼클릭시 자동함수 해지
		$(".play").hide();
		$(".stop").show();

		index=$(this).index();
		slideImg(index);
		auto=setInterval(slideAuto,4000); //버튼 클릭안할땐 다시 자동함수 실행

	});

/*======================3번 ===================*/
$(".ban p").hover(function(){
  $(this).find("strong,span").animate({opacity:1},300);
},function(){
  $(this).find("strong,span").animate({opacity:0},300);
});



/*======================4번 ===================*/

$(".link li").click(function(){
  $(this).find("li").show().slideDown();
});
$(".link li").click(function(){
  $(this).find("li").hide().slideUp();
});





});
