$(document).ready(function(){

$(".thumbs em").hide(); //설명문구 부분 숨기기

$(".thumbs a").click(function(){

	$("#caption").remove();
	//기존에 올라와 있는게 있으면 내려라;

	path=$(this).attr("href");
	$("#largeImg>img").attr({"src":path});

	var msg=$(this).next("em").text(); //em에 있는 텍스트 불러옴.
	$("#largeImg").append("<div id='caption'></div>");
	//#largeImg의 맨뒤에 텍스트 박스태그 추가
	$("#largeImg #caption").text(msg);
	//해당하는 이미지의 테스트 출력

	var posy=$("#largeImg #caption").height()+20;
	//#caption안에 들어가는 텍스트의 높이
	$("#largeImg #caption").animate({top:"-"+posy+"px"},300);
	//위에서 변하는 높이만큼 위로 올리기


	return false;
});

});


/*

$("요소선택").remove(); ->선택한요소를삭제한다.

$("요소선택").next();->선택한 요소의 다음 요소를 선택

$("요소선택").append("새요소");
$("새요소").appendTo("요소선택");
->선택한 요소의 마지막 위치에 새 요소를 추가한다.

$("요소선택").height(); ->안쪽 여백과 선을 제외한 높이값을 반환하거나 변환한다.

*/
