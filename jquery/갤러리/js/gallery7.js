
var oldidx=0; //기존에 있는 이미지 변수
var idx=0; //선택된 이미지

function changeImg(idx){ //idx는 선택되는 이미지
  if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때...
    //이미지가 바뀌는거 + 썸네일 투명도 조절 하는 2가지가 변해야됨
    $(".thumbs li").eq(idx).css({"opacity":0.3});//선택된 썸네일 이미지
    $(".thumbs li").eq(oldidx).css({"opacity":1}); //선택되지 않은 기존의 썸네일 이미지
    $(".largeImg li").eq(idx).stop(true,true).fadeIn(300); // 선택된 이미지
    $(".largeImg li").eq(oldidx).stop(true,true).fadeOut(300); //기존이미지
  }
  oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장
}

$(document).ready(function(){

  $(".thumbs li").click(function(){

    idx=$(this).index();
    changeImg(idx);

  });




});
