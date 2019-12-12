$(document).ready(function(){

	var duration=300; //속도저장

// typo Plug In(1) 마우스에따라 그림자 움직이는 효과-------------------
	$("#typo").typoShadow();

// button1 --------------------------------------------
// button1-1행
	$("#buttons1 button:nth-child(-n+4)").hover(function(){ //4번째까지의 버튼
		$(this).stop(true,true).animate({
			backgroundColor:"#ae5e9b",
			color:"#fff"
		},duration);
	},function(){
		$(this).stop(true,true).animate({
			backgroundColor:"#fff",
			color:"#ebc000"
		},duration);
	});

// button1-2행
	$("#buttons1 button:nth-child(n+5):nth-child(-n+8)").hover(function(){ //4번째까지의 버튼
		$(this).stop(true,true).animate({
			borderWidth:"12px",
			color:"#ae5e9b"
		},duration);
	},function(){
		$(this).stop(true,true).animate({
			borderWidth:"0px",
			color:"#ebc000"
		},duration);
	});

// button1-3행
	$("#buttons1 button:nth-child(n+9)").hover(function(){ //4번째까지의 버튼
		$(this).find(">span").stop(true,true).animate({width:"100%"},duration);
	},function(){
		$(this).find(">span").stop(true,true).animate({width:"0%"},duration);
	});


// button2 --------------------------------------------
	$("#buttons2 button").hover(function(){
		var $btn=$(this).stop(true,true).animate({
			backgroundColor:"#faee00",
			color:"#000"
		},duration);
		$btn.find("img:first-child").stop(true,true).animate({opacity:0},duration);
		$btn.find("img:nth-child(2)").stop(true,true).animate({opacity:1},duration);


	},function(){
		var $btn=$(this).stop(true,true).animate({
			backgroundColor:"#fff",
			color:"#01b169"
		},duration);
		$btn.find("img:first-child").stop(true,true).animate({opacity:1},duration);
		$btn.find("img:nth-child(2)").stop(true,true).animate({opacity:0},duration);

	});


	// Images --------------------------------------------
	// images 첫번째 이미지
	$("#images p:nth-child(1)").hover(function(){
		$(this).find("strong,span").animate({opacity:1},duration);
	},function(){
		$(this).find(">strong").animate({opacity:0},duration);
		$(this).find(">span").animate({opacity:0},duration);
	});

	// images 두번째 이미지
	$("#images p:nth-child(2)").hover(function(){
		$(this).find(">strong").animate({opacity:1,left:"0%"},duration);
		$(this).find(">span").animate({opacity:1},duration);

	},function(){
		$(this).find(">strong").animate({opacity:0,left:"-200%"},duration);
		$(this).find(">span").animate({opacity:0},duration);
	});

	// images 세번째 이미지
	$("#images p:nth-child(3)").hover(function(){
		$(this).find("strong").stop(true,true).animate({opacity:1,bottom:"0px"},duration);
		$(this).find("span").stop(true,true).animate({opacity:1},duration);
		$(this).find("img").stop(true,true).animate({top:"-20px"},duration);
	},function(){
		$(this).find("strong").stop(true,true).animate({opacity:0,bottom:"-80px"},duration);
		$(this).find("span").stop(true,true).animate({opacity:0},duration);
		$(this).find("img").stop(true,true).animate({top:"0px"},duration);
	});



	// aside --------------------------------------------

$(".quick_toggle").click(function(){
	$("aside").animate({left:"0px"},duration);
},function(){
	$("aside").animate({left:"-250px"},duration);
});



});

/*
nth-child(n+4):nth-child (-n+8) -> 4번째에서 8번째

특정범위는
nth-child(n+k):nth-child (-n+m) 형식을 취해주면 된다.

1,3,5,7...처럼 홀수만 선택할 때는 nth-child(2n-1)
3,7,11...과 같은 경우 4n-1을 적용해야 한다.

n은 0부터 시작함.
-0+4=4, -1+4=3, -2+4=2, -3+4=1
*/
