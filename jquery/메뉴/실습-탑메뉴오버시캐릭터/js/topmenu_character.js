$(document).ready(function(){

    $(".gnb>ul>li>a").mouseenter(function(){
      $(this).css("background","rgba(196, 152, 34, 0.42)");
          //하이퍼링크 a의 배경박스
  		$(this).find("p").css("background","rgba(0, 0, 0, 0.42)");
  		//글자부분에 둥근모서리
  		$(this).find(">span>img").stop(true,true)
  		.animate({top:"12px"},300,"easeOutBounce");
  		//캐릭터
    });
    $(".gnb>ul>li>a").mouseleave(function(){
      $(this).css("background","transparent");
  		$(this).find("p").css("background","transparent");
  		$(this).find(">span>img").stop(true,true)
  		.animate({top:"50px"},300);
    });

});
