$(function(){

    //关闭上面的提醒
    $(".chahao").click(function(){
        $(".red-triangle").css("display","none");
        $(".chahao").css("display","none");
        $(".PC").css("display","none");
    });
//input的框
    $(".box").mouseenter(function(){
        $(this).find("input").css("border","2px solid #dd2726");
        $(this).find(".xiala").show().animate({'height':100 + 'px'}, 500);
        $(this).mouseleave(function(){
            $(this).find("input").css("border","2px solid #d6d6d6");
            $(this).find(".xiala").hide().animate({'height':0 + 'px'}, 0);//这么写为的是让下一次的height值还是0
        });
    });
//上方的半透明的搜索条
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $(".touming").show();
        }else{
            $(".touming").hide();
        }
    });



//左侧ul li
	$("aside ul li").mouseover(function(event) {
		/* Act on the event */
		$(this).css("background","#dd2627");
        $(this).css("color","#fff");
        $("aside ul li a").css("color","#fff");
        $(this).siblings("li").find("a").css("color","#333");


        $(this).find(".huagong").css("background-position","-409px -27px");
        $(this).find(".anfang").css("background-position","-409px -474px");
        $(this).find(".dianzi").css("background-position","-409px -59px");
        $(this).find(".jiudian").css("background-position","-409px -326px");
        $(this).find(".wujin").css("background-position","-409px -88px");
        $(this).find(".fuzhuang").css("background-position","-409px -116px");
        $(this).find(".yinshua").css("background-position","-409px -148px");
        $(this).find(".jingshuiqi").css("background-position","-409px -178px");
        $(this).find(".kongtiao").css("background-position","-409px -208px");
        $(this).find(".qiche").css("background-position","-409px -238px");
        $(this).find(".shipin").css("background-position","-409px -268px");
        $(this).find(".jiadian").css("background-position","-409px -298px");
        $(this).find(".pige").css("background-position","-409px -358px");
        $(this).find(".gongcheng").css("background-position","-409px -388px");
        $(this).find(".guangdian").css("background-position","-409px -418px");
        $(this).find(".yinxiang").css("background-position","-409px -448px");

		$("aside ul li").mouseout(function(event) {
            /* Act on the event */
            $(this).css("background","#f6f6f6");
            $(this).css("color","#333");
            $("aside ul li a").css("color","#333");
            $(this).find(".huagong").css("background-position","-386px -27px");
            $(this).find(".anfang").css("background-position","-386px -500px");
            $(this).find(".dianzi").css("background-position","-386px -59px");
            $(this).find(".jiudian").css("background-position","-386px -326px");
            $(this).find(".wujin").css("background-position","-386px -88px");
            $(this).find(".fuzhuang").css("background-position","-386px -116px");
            $(this).find(".yinshua").css("background-position","-386px -148px");
            $(this).find(".jingshuiqi").css("background-position","-386px -178px");
            $(this).find(".kongtiao").css("background-position","-386px -208px");
            $(this).find(".qiche").css("background-position","-386px -238px");
            $(this).find(".shipin").css("background-position","-386px -268px");
            $(this).find(".jiadian").css("background-position","-386px -298px");
            $(this).find(".pige").css("background-position","-386px -358px");
            $(this).find(".gongcheng").css("background-position","-386px -388px");
            $(this).find(".guangdian").css("background-position","-386px -418px");
            $(this).find(".yinxiang").css("background-position","-386px -448px");
        });
	});

    //中间banner上面显示的div

    $("aside ul li:nth-child(1)").on("mouseenter",function (){
        $(".huagong1").show().animate({'left':192 + 'px'}, 500);
//        loadNavMore($(this).index());
    })
    $("aside ul li:nth-child(1)").on("mouseleave",function (){
        $(".huagong1").hide().animate({'left':182 + 'px'}, 0);
    })
    $(".huagong1").on("mouseenter",function (){
        $(".huagong1").show().animate({'left':192 + 'px'}, 0);
    })
    $(".huagong1").on("mouseleave",function (){
        $(".huagong1").hide().animate({'left':182 + 'px'}, 0);
    });
    $("aside ul li:nth-child(2)").on("mouseenter",function (){
        $(".anfang1").show().animate({'left':192 + 'px'}, 500);
//        loadNavMore($(this).index());
    })
    $("aside ul li:nth-child(2)").on("mouseleave",function (){
        $(".anfang1").hide().animate({'left':182 + 'px'}, 0);
    })
    $(".anfang1").on("mouseenter",function (){
        $(".anfang1").show().animate({'left':192 + 'px'}, 0);
    })
    $(".anfang1").on("mouseleave",function (){
        $(".anfang1").hide().animate({'left':182 + 'px'}, 0);
    });


    $("aside ul li:nth-child(3)").on("mouseenter",function (){
        $(".dianzi1").show().animate({'left':192 + 'px'}, 500);
//        loadNavMore($(this).index());
    })
    $("aside ul li:nth-child(3)").on("mouseleave",function (){
        $(".dianzi1").hide().animate({'left':182 + 'px'}, 0);
    })
    $(".dianzi1").on("mouseenter",function (){
        $(".dianzi1").show().animate({'left':192 + 'px'}, 0);
    })
    $(".dianzi1").on("mouseleave",function (){
        $(".dianzi1").hide().animate({'left':182 + 'px'}, 0);
    });



//鼠标滑动控制左侧边栏和中间页面内容的移动
    $(document).ready(function(){
        //窗口的事件：
        var $h2 = $("#element h2");
        var $hcleftLi = $("#hcleft ul li");
        $(window).scroll(function(){

            if($(window).scrollTop() < $h2.eq(1).offset().top-160){
                $("#hcleft ul li").replaceWith("<li><a href='#'></a></li>");//这里要清空一下，如果不清空，无法使用第二次
                $("#hcleft ul li").eq(0).html("化工行业").css("color","#dd2726");
                $hcleftLi.eq(0).addClass("cur").siblings().removeClass("cur");
            }else if($(window).scrollTop() < $h2.eq(2).offset().top-160){
                $("#hcleft ul li").replaceWith("<li><a href='#'></a></li>");
                $("#hcleft ul li").eq(1).html("安防消防").css("color","#dd2726");
                $hcleftLi.eq(1).addClass("cur").siblings().removeClass("cur");
            }else if($(window).scrollTop() < $h2.eq(3).offset().top-160){
                $("#hcleft ul li").replaceWith("<li><a href='#'></a></li>");
                $("#hcleft ul li").eq(2).html("五金建材").css("color","#dd2726");
                $hcleftLi.eq(2).addClass("cur").siblings().removeClass("cur");

            }else if($(window).scrollTop() < $h2.eq(4).offset().top-160){
                $("#hcleft ul li").replaceWith("<li><a href='#'></a></li>");
                $("#hcleft ul li").eq(3).html("服装纺织").css("color","#dd2726");
                $hcleftLi.eq(3).addClass("cur").siblings().removeClass("cur");
            }else if($(window).scrollTop() < $h2.eq(5).offset().top-160){
                $("#hcleft ul li").replaceWith("<li><a href='#'></a></li>");
                $("#hcleft ul li").eq(4).html("印刷丝印").css("color","#dd2726");
                $hcleftLi.eq(4).addClass("cur").siblings().removeClass("cur");
            }else{
                $("#hcleft ul li").replaceWith("<li><a href='#'></a></li>");
                $("#hcleft ul li").eq(5).html("净水行业").css("color","#dd2726");
                $hcleftLi.eq(5).addClass("cur").siblings().removeClass("cur");
            }

        });


        //点击楼层导航的时候：
        $("#hcleft ul li").click(function(){
            $("body").animate(
                {
                    //往对应h2上跳：
                    "scrollTop" : parseInt($h2.eq($(this).index()).offset().top)-160
                }
                ,1000
            );
            return false;
        });


    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 700&&$(window).scrollTop()<=3300){
            $("#hcleft").show();
        }else {
            $("#hcleft").hide();
        }
    });


//右侧部分
    $(".gouwu").mouseover(function(){
        $(this).css("background","#dd2627 url('../images/indexicon.png')no-repeat -96px -266px");
        $(this).find("p").show().animate({'width':80 + 'px'}, 100).animate({'height':30 + 'px'}, 100);
        $(".gouwu").mouseout(function(){
            $(this).css("background","#aaa url('../images/indexicon.png')no-repeat -96px -266px");
            $(this).find("p").hide();
        });
    });
    $(".kehu").mouseover(function(){
        $(this).css("background","#dd2627 url('../images/indexicon.png')no-repeat -124px -266px");
        $(this).find("p").show().animate({'width':80 + 'px'}, 100).animate({'height':30 + 'px'}, 100);
        $(".kehu").mouseout(function(){
            $(this).css("background","#aaa url('../images/indexicon.png')no-repeat -124px -266px");
            $(this).find("p").hide();
        });
    });
    $(".zaixian").mouseover(function(){
        $(this).css("background","#dd2627 url('../images/indexicon.png')no-repeat -150px -266px");
        $(this).find("p").show().animate({'width':80 + 'px'}, 100).animate({'height':30 + 'px'}, 100);
        $(".zaixian").mouseout(function(){
            $(this).css("background","#aaa url('../images/indexicon.png')no-repeat -150px -266px");
            $(this).find("p").hide();
        });
    });
    $(".yonghu").mouseover(function(){
        $(this).css("background","#dd2627 url('../images/indexicon.png')no-repeat -185px -266px");
        $(this).find("p").show().animate({'width':80 + 'px'}, 100).animate({'height':30 + 'px'}, 100);
        $(".yonghu").mouseout(function(){
            $(this).css("background","#aaa url('../images/indexicon.png')no-repeat -185px -266px");
            $(this).find("p").hide();
        });
    });
    $(".returnTop a").mouseover(function(){
        $(this).css("background","#dd2627 url('../images/indexicon.png')no-repeat -216px -266px");
        $(this).find("p").show().animate({'width':80 + 'px'}, 100).animate({'height':30 + 'px'}, 100);
        $(".returnTop a").mouseout(function(){
            $(this).css("background","#aaa url('../images/indexicon.png')no-repeat -216px -266px");
            $(this).find("p").hide();
        });8
    });
//回到顶部
    $(".returnTop").click(function (){
        $('body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});
//轮播图的点击事件
$(document).ready(function(e) {
    var lunbo1 = $('#lunbo1').unslider({
            dots: true
        }),
        data = lunbo1.data('unslider');

    $('.unslider-banner').click(function() {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });
    $("#lunbo1").mouseover(function(){
        $(this).find($("#ar")).show();
        $(this).find($("#al")).show();
        $("#lunbo1").mouseout(function(){
            $(this).find($("#ar")).hide();
            $(this).find($("#al")).hide();
        });
    });
    setTimeout(function (){
        $(".dots").eq(1).remove();
    },500);
});