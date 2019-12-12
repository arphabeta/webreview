$(document).ready(function(){

	//이미지 전환효과 함수생성
	showImg=0;
	nextImg=0;

	function changeImg(){

		nextImg++;
		ImgCount=$(".mainvisual .visual_image li").length;

		if(nextImg==ImgCount){  //마지막이미지일때 다시 첫번째 이미지로
			nextImg=0;
		}

		$(".mainvisual .visual_image li").eq(showImg).stop(true,true).removeClass("imgVisible");
		$(".mainvisual .visual_image li").eq(nextImg).stop(true,true).addClass("imgVisible");
		$(".mainvisual .btn>span").eq(nextImg).addClass("active"); //선택된 하단버튼
		$(".mainvisual .btn>span").eq(showImg).removeClass("active"); //기존 하단버튼
		showImg=nextImg;

	}

	timer1=setInterval(changeImg,5000);



	//텍스트 전환효과 함수생성
	showText=0;
	nextText=0;

	function changeText(){

		nextText++;
		TextCount=$(".mainvisual .visual_text li").length;

		if(nextText==TextCount){  //마지막이미지일때 다시 첫번째 이미지로
			nextText=0;
		}

		$(".mainvisual .visual_text li .Vtext").eq(showText).stop(true,true).removeClass("textVisible");
		$(".mainvisual .visual_text li .Vtext").eq(nextText).stop(true,true).addClass("textVisible");
		$(".mainvisual .btn>span").eq(nextText).addClass("active"); //선택된 하단버튼
		$(".mainvisual .btn>span").eq(showText).removeClass("active"); //기존 하단버튼
		showText=nextText;

	}

	timer2=setInterval(changeText,5000);

	//버튼클릭시
	$(".mainvisual .btn>span").click(function(){
		clearInterval(timer1); //버튼 클릭시 자동함수 해지
		clearInterval(timer2);

		nextImg=$(this).index(); //0,1,2...
		nextText=$(this).index();

		$(".mainvisual .visual_image li").eq(showImg).stop(true,true).removeClass("imgVisible");
		$(".mainvisual .visual_image li").eq(nextImg).stop(true,true).addClass("imgVisible");
		$(".mainvisual .btn>span").eq(nextImg).addClass("active"); //선택된 하단버튼
		$(".mainvisual .btn>span").eq(showImg).removeClass("active"); //기존 하단버튼
		showImg=nextImg;

		$(".mainvisual .visual_text li .Vtext").eq(showText).stop(true,true).removeClass("textVisible");
		$(".mainvisual .visual_text li .Vtext").eq(nextText).stop(true,true).addClass("textVisible");
		$(".mainvisual .btn>span").eq(nextText).addClass("active"); //선택된 하단버튼
		$(".mainvisual .btn>span").eq(showText).removeClass("active"); //기존 하단버튼
		showText=nextText;

		timer1=setInterval(changeImg,5000); //버튼클릭안할때는 다시 자동함수 적용
		timer2=setInterval(changeText,5000);
	})

});
