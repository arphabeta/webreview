$(document).ready(function(){

	$(".menu li").hover(function(){
		var num=$(this).index()+1; //지역변수
		//0,1,2..번호매기기
		//이미지 파일명이 1부터 시작이므로 +1을 해서 0이 아닌 1부터 시작하게 함.
		$(this).find("a img").attr({"src":"image/menuover_0"+num+".jpg"});
		//find()->menu li a img까지 들어가라. 하위개념을 찾는것.

		//var을 붙이면 지역변수 이므로 out일때의 문장에도 변수선언을 해주어야 함.
		//var를 붙이지 않으면 전역변수 이므로 over일때의 문장에만 삽입함.

	},function(){
		var num=$(this).index()+1; //지역변수
		//0,1,2..번호매기기
		$(this).find("a img").attr({"src":"image/menu_0"+num+".jpg"});
	});

});

/*
지역변수와 전역 변수

var 변수이름 ; ->지역변수선언(해당하는 문장에서만 변수를 사용할 수 있다.)
변수이름; ->전역변수선언(전체문장에 변수를 사용할 수 있다.)

index()메서드 : 이벤트가 발생하는 요소의 인덱스 값을 반환
index()요소의 값은 0부터 시작한다.

*/
