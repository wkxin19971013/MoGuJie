$(function(){
    $.ajax({
        type:'get',
        url:'js/mogujie.json',
        data:'json',
        success:function(w){
            var str=eval(w);
            var at='';
            for (var k in str){
                at+="<div class='list fl'>",
                at+="<div class='list-img'>",
                at+="<img src='"+str[k].img+"'>",
                at+="<span>"+str[k].val+"</span>",
                at+="</div>",
                at+="<div class='list-info'>",
                at+="<p class='p1'>"+str[k].text+"</p>"
                at+=" <p class='p2'>",
                at+=" <span class='s1 fl'>"+str[k].money+"</span>",
                at+="<span class='s2 fr'>"+str[k].hot+"</span>",
                at+="</p>",
                at+=" </div>",
                at+="<div class='pink'>立即购买</div>",
                at+=" </div>"
            }
        $('.list-box').append(at);
        }
    })
})