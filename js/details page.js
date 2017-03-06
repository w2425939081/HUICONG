$(function(){
    //关闭上面的提醒
    $(".chahao").click(function(){
        $(".red-triangle").css("display","none");
        $(".chahao").css("display","none");
        $(".PC").css("display","none");
    });
	$("nav .center ul li.gongying").mouseover(function(event) {
		/* Act on the event */
		$("nav .center ul li.gongying .supply").css("display","block");
		$(this).mouseout(function(event) {
			/* Act on the event */
			$("nav .center ul li.gongying .supply").css("display","none");
		});
	});
    $(".jqzoom").attr('rel',$("#thumblist li a").find("img").attr("big"));
    $(".jqzoom").imagezoom();
    $("#thumblist li a").click(function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
    });

    $(".right").click(function(){
            $(".number").val(parseInt($(".number").val())+1);
            $(".total").html(parseInt($(".total").html())+1);
            $(".price").html(parseFloat($(".price").html())+750.00);

    });
    $(".left").click(function(){
        if(parseInt($(".number").val())>0) {
            $(".number").val(parseInt($(".number").val()) - 1);
            $(".total").html(parseInt($(".total").html()) - 1);
            $(".price").html(parseFloat($(".price").html()) - 750.00);
        }
    });
    //购物车

    $("a.put").click(function(){
        $(document).scrollTop(200);
    });
    $("a.put").on('click',addCart);

    function addCart(event) {
        var offset = $('a.gouwu').offset(), flyer = $('<img class="u-flyer" src="../images/01_small.jpg"/>');
        flyer.fly({
            start: {
                left: event.clientX,
                top: event.clientY-50
            },
            end: {
                left: offset.left,
                top: offset.top-180,
                width: 0,
                height: 0
            }
        });
    };
    $("a.put").mousedown(function(){
        setTimeout(function(){
            $("a.gouwu").css("background","#dd2627 url('../images/indexicon.png')no-repeat -96px -266px");
        },1000)
    });
    $("a.put").mouseup(function(){
        setTimeout(function(){
            $("a.gouwu").css("background","#aaa url('../images/indexicon.png')no-repeat -96px -266px");
        },1000)    });
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
        });
    });
//回到顶部
    $(".returnTop").click(function (){
        $('body').animate({ scrollTop: 0 }, 1000);
        return false;
    });




//    底部的ajax效果

    $(".reListShow").click(function () {
        console.log($(this).html());
        if($(this).html()=="完整显示"){
            var url="../json/tv-relation.json";
            $.ajax({
                type:"get",
                url:url,
                success: function (response,status,xhr) {
                    var arr=response;

                    var hh=arr.name;
                    var h3= $("<h3>"+hh+"</h3>");
                    $(".detailsBox7-element ul.relation").append(h3);
                    var lists=arr.list;
                    for(var i=0;i<lists.length;i++){
                        var li= $("<li><a href=\"#\">"+lists[i]+"</a></li>");
                        $(".relation").first().append(li);
                    }
                    $(".reListShow").html("隐藏");
                }

            })
        }else if($(this).html()=="隐藏"){
            $(".detailsBox7-element ul.relation h3").remove();
            $(".detailsBox7-element ul.relation li").remove();
            $(".reListShow").html("完整显示");
        }
    })
});