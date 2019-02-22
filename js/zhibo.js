$(function () {
    var $oneoff = $(".go").offset().left;
    $(".top a").click(function () {
        var $left = $(this).offset().left - $oneoff;
        var $width = $(this).width();
        $(this).addClass("active").siblings("a").removeClass("active")
        $(".pink").css({
            "left": $left,
            "width": $width
        });
    })
})
// 直播四个选项卡
$(function(){
    var $contents=$("section")
    $('.top a').click(function(){
        $contents.hide();
        var index=$(this).index();
        $($contents[index]).show();
    })
})