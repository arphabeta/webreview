$(document).ready(function(){

  //방법3============================
  $(".thumbs a").click(function(){
    var path=$(this).attr("href"); //href로 가져와서 path에 저장하고
    $("#largeImg>img").attr({"src":path});
    return false;

  });


  // //방법2.========================
  // $(".thumbs a").click(function(){
  //   var num=$(this).index(); //0,1,2,3...
  //   $("#largeImg>img").attr({"src":"image/bg"+num+".jpg"});
  //   return false;
  // });


  //방법1=====================
  //   $(".thumbs a").eq(0).click(function(){ //thumbs의 a의 1번째를 클릭하면
  //  		$("#largeImg>img").attr({"src":"image/bg0.jpg"});
  //  		return false; //<a>태그에 링크 기능을 차단시킴
  //  	});
  //   $(".thumbs a").eq(1).click(function(){ //thumbs의 a의 1번째를 클릭하면
  //    $("#largeImg>img").attr({"src":"image/bg1.jpg"});
  //    return false; //<a>태그에 링크 기능을 차단시킴
  //  });
  //  $(".thumbs a").eq(2).click(function(){ //thumbs의 a의 1번째를 클릭하면
  //   $("#largeImg>img").attr({"src":"image/bg2.jpg"});
  //   return false; //<a>태그에 링크 기능을 차단시킴
  // });
  // $(".thumbs a").eq(3).click(function(){ //thumbs의 a의 1번째를 클릭하면
  //  $("#largeImg>img").attr({"src":"image/bg3.jpg"});
  //  return false; //<a>태그에 링크 기능을 차단시킴
  // });




});
