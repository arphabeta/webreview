$(document).ready(function(){

	$(".gnbMenu>li").hover(function(){
		$(this).find(">ul").stop(true,true).slideDown();
	},function(){
		$(this).find(">ul").stop(true,true).slideUp();
	});	

});

/*stop():사용자의 중복 반응 제거
->현재 실행중인 애니메이션을 정지시키고, 다음 애니메이션을 진행

사용자 마우스의 중복(빠른) 반응 때문에 애니매이션 겹침현상이 생긴다

*해결방법 : stop( ) -> stop(효과누적,진행과정)
기본값 : stop( ) == stop( false,false )
변경해야될 값 : stop( true, true )

예)
 $(선택자).stop(true,true).animate({...........});
 $(선택자).stop(true,true).slideDown( );
 ...........
중간과정이 발생하는 애니매이션 효과의 모든 곳에 적용
아주 나이스한 페이드 효과를 주길 원할 때 .stop(true, true) 형태를 사용하면 좋다.
*/
