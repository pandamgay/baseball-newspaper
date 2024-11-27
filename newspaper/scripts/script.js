$("#topBtn").css("opacity",0);
// 클릭 이벤트 핸들러
$("#topBtn").click(function(e){
    e.stopPropagation();        
    $("html, body").animate({ scrollTop : 0 }, 'slow', 'easeOutCubic' );   
})

// 스크롤 이벤트 핸들러 
$(window).scroll(function() { 
    if($(window).scrollTop()==0)
    {            
        $("#topBtn").css("opacity",0); // 맨위로 버튼 숨기기
    }
    else{
        $("#topBtn").css("opacity",1);
    }
});