// 中间 发现 关注 流行
$(function(){
    $('.cont-tit li').click(function(){
        $('.cont-tit li').find('em').removeClass('active');
        $(this).find('em').addClass('active');
    })
})
// 底部首页 商城直播我
$(function(){
    $('.foot a').click(function(){
        $(this).removeClass('active');
        $(this).addClass('active').siblings('a').removeClass('active');
    })
})
// 置顶
$(function(){
    $(window).scroll(function(){
if($(this).scrollTop()>700){
    $('.cont-tit').addClass('active')
}else{
    $('.cont-tit').removeClass('active')
}
    })
})