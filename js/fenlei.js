// 侧边
$(function(){
    $('.gun1 li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).find('p').removeClass('active');
        $(this).find('p').addClass('active').siblings('p').removeClass('active');
    })
});
// 大选项卡
$(function(){
    var $div=$('.right>div');
    $('.gun1 li').click(function(){
        $div.hide();
        var index=$(this).index();
        $($div[index]).show();
    })
});
// 正在流行 综合 销量 新品 选项卡
$(function(){
    $('.one-wrap-tit a').click(function(){
        $(this).removeClass('active');
        $(this).addClass('active').siblings('a').removeClass('active');
    })
});
//
$(function(){
    $.ajax({
        type:'get',
        url:'js/mogujie.json',
        data:'json',
        success:function(w){
            var str=eval(w);
            
            var at='';
            for(var k in str){
                at+="<div class='list fl'>",
                at+="<div class='list-img'>",
                    at+=" <img src='"+str[k].img+"' >",
                    at+="<span>"+str[k].val+"</span>",
                    at+="</div>",
                    at+=" <div class='list-info'>",
                    at+="<p class='p1'>"+str[k].text+"</p>",
                    at+="<p class='p2'>",
                    at+="<span class='s1 fl'>"+str[k].money+"</span>",
                    at+="<span class='s2 fr'>"+str[k].hot+"</span>",
                    at+=" </p>",
                    at+=" </div>",
                    at+=" </div>"
            }
            $('.one-wrap-list').append(at);
        }
    })
});