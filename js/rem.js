(function(doc,win){
    var docEl=doc.documentElement,
    // 设备重置 orientationchange ：屏幕旋转  resize
    // DOMContentLoaded
    resizeEvt='orientationchangeor' in window? 'orientationchange':'resize',
relalc=function(){
    // 获取屏幕宽度
    var clientWidth=docEl.clientWidth;
    if(!clientWidth) return;
    docEl.style.fontSize=clientWidth/7.5*2+'px'
}
if(!addEventListener) return 
win.addEventListener(resizeEvt,relalc,false);
doc.addEventListener('DOMContentLoaded',relalc,false)
})(document,window)