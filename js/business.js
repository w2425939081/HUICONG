/**
 * Created by Administrator on 2016/11/7.
 */
$(function(){
    //关闭上面的提醒
    $(".chahao").click(function(){
        $(".red-triangle").css("display","none");
        $(".chahao").css("display","none");
        $(".PC").css("display","none");
    });
    $(".mmtBoxThree ul li").mouseover(function(){
        $(".cur").removeClass("cur");
        $(this).addClass("cur");
    });
});
$(document).ready(function(e) {
    var lunbo = $('#focus').unslider({
            dots: true
        }),
        data = lunbo.data('unslider');
});