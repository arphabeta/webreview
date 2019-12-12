$(document).ready(function(){

 //Top Allmenu
 $(".all").click(function(){
   $(".top .menu").stop(true,true).slideDown("slow");
 });

 $(".btn_close").click(function(){
   $(".top .menu").stop(true,true).slideUp("fast");
 })






 //Main Visual
 var oldidx=0; //기존 이미지
 var idx=0; //새로 올 이미지

 //이미지와 버튼이 바뀌는 함수
 function changeImg(idx){//idx는 선택되는 이미지
   if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를 때
     $(".mainvisual .btn>span").eq(idx).addClass("active"); //선택된 하단버튼
     $(".mainvisual .btn>span").eq(oldidx).removeClass("active"); //기존 하단버튼
     $(".mainvisual ul li").eq(idx).stop(true,true).fadeIn(300); //선택된 이미지
     $(".mainvisual ul li").eq(oldidx).stop(true,true).fadeOut(300); //기존 이미지
   }
   oldidx=idx; // 선택된 이미지는 다시 기존이미지로 저장되어서 fade out
 }

 //자동함수 생성
 function changeAuto(){
   idx++;
   if(idx>4){ //선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
     idx=0;
   }
   changeImg(idx);
 }

 timer=setInterval(changeAuto,4000);

/*버튼 누르면 옮겨지는*/
 $(".mainvisual .btn>span").click(function(){
   clearInterval(timer);  //버튼클릭시 자동함수 해지
   idx=$(this).index(); //0,1,2,3...
   changeImg(idx);
   timer=setInterval(changeAuto,4000); //버튼클릭안할때는 다시 자동함수

 });

 /*play, stop 버튼 클릭 시*/
 chkPlay=true;

 $(".playbt").click(function(){
   if(chkPlay){ //stop버튼을 클릭시
     clearInterval(timer);
     $(this).css({"background":"url('image/main_play.png') no-repeat 0 0"});
     chkplay=false;
   }else{ //play 버튼을 클릭시
     timer=setInterval(changeAuto,4000);
     $(this).css({"background":"url('image/main_pause.png') no-repeat 0 0"});
     chkplay=true;
   }
 });



});
