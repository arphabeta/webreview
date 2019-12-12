$(document).ready(function(){

	//방법3============================
  $(".thumbs a").click(function(){
    var path=$(this).attr("href"); //href로 가져와서 path에 저장하고
    $("#largeImg>img").attr({"src":path}).hide().fadeIn();
    return false;
  });


});
