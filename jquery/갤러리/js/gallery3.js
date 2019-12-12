$(document).ready(function(){

  old=0; //old는 처음 있던 이미지, num은 다음에 올 이미지

  $(".thumbs a").click(function(){

    num=$(this).index(); //0,1,2,3...
    $("#largeImg>img").eq(old).stop(true,true).fadeOut(1000);
    //기존 이미지 사라짐
    $("#largeImg>img").eq(num).stop(true,true).fadeIn(1000,function(){
      //새 이미지 나타남
      old=num; //콜백함수 -> 바뀐 이미지도 헌 이미지가 되어야 다른 이미지를 클릭했을때 이 이미지도 헌이미지가 됨
      //새로나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeout
    });
    return false;
  });






});
