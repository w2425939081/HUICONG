/**
 * Created by Administrator on 2016/11/4.
 */
$(function(){

    //左
    $(".decreaseProduct").click(function(){
        if(parseInt($(".product").val())>0){
            $(".product").val(parseInt($(".product").val())-1);
            $("#pcountId").html(parseInt($("#pcountId").html())-1);
            $(".totalPrice").html(parseFloat(parseFloat($(".totalPrice").html())-750).toFixed(2));
            $("#pricesId").html(parseFloat(parseFloat($("#pricesId").html())-750).toFixed(2));
            if(parseInt($(".product").val())<10){
                $(".cw-hint").show();
            }else{
                $(".cw-hint").hide();
            }
        }
    });
    //右
    $(".increaseProduct").click(function(){

        $(".product").val(parseInt($(".product").val())+1);
        $("#pcountId").html(parseInt($("#pcountId").html())+1);
        $(".totalPrice").html(parseFloat(parseFloat($(".totalPrice").html())+750).toFixed(2));
        $("#pricesId").html(parseFloat(parseFloat($("#pricesId").html())+750).toFixed(2));
        if(parseInt($(".product").val())<10){
            $(".cw-hint").show();
        }else{
            $(".cw-hint").hide();
        }
    });
    $(".product").blur(function(){
        if(parseInt($(".product").val())<10){
            $(".cw-hint").show();
        }else{
            $(".cw-hint").hide();
        }
    });
    $("a.close").click(function(){
        $(".element table tbody tr:nth-child(3)").hide();
    })
});
$(window).bind('beforeunload',function(){return '';});