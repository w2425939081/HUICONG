$(function () {

/*     注册页第一页开始       */
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    $("input").click(function(){
        $(this).css("border-color","blue")
    });
    /*
    * 验证手机号
    * */
    //鼠标点进输入框时触发
   $(".phoneNumber").focus(function(){
       $(".pN").css("display","block");
       $(".pN").find($(".cur")).show();
   });
    //键盘在输入框内按下时触发
    $(".phoneNumber").keydown(function(){
        $(".pN").find($(".tips-errow")).html('<i class="cur"></i>手机号必须以1开头的11位数字');
        $(".pN").find($(".tips-errow")).css("color","#333");
        $(".pN").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".phoneNumber").blur(function(){
        var reg1 = /^1[34578]\d{9}$/;
        var str = $(".phoneNumber").val();
        if(reg1.test(str)){
            $(".pN").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".pN").find($(".ok")).show();
            $(".phoneNumber").css("border-color","#ccc");
            flag1=true;
        }else{
            $(".pN").find($(".tips-errow")).html('<i class="error"></i>手机号必须以1开头的11位数字');
            $(".pN").find($(".tips-errow")).css("color","#dd2726");
            $(".phoneNumber").css("border-color","#dd2726");
            $(".pN").find($(".error")).show();
            flag1=false;
        }
    });



/*

验证码
 */
//随机函数
    function generate4() {
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        var result = [];
        for (var i = 1; i <= 4; i++) {
            var index = Math.floor(Math.random() * arr.length);
            result.push(arr[index]);
        }
        var sum = "";
        for (var i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }
    $(".yanzhengpic").html(generate4());
    $(".yanzhengpic").click(function () {
        $(".yanzhengpic").html(generate4());
    });

    //鼠标点进输入框时触发
    $(".yanzhenginput").focus(function(){
        $(".yZ").css("display","block");
        $(".yZ").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发    //要有一个判断
    $(".yanzhenginput").keydown(function(){
        $(".yZ").find($(".tips-errow")).html('<i class="cur"></i>');
        $(".yZ").find($(".tips-errow")).css("color","#333");
        $(".yZ").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".yanzhenginput").blur(function(){
        console.log($(".yanzhengpic").html());
        if($(".yanzhenginput").val()==$(".yanzhengpic").html() ){
            $(".yZ").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".yZ").find($(".ok")).show();
            $(".yanzhenginput").css("border-color","#ccc");
            flag2 = true;
        }else{
            $(".yZ").find($(".tips-errow")).html('<i class="error"></i>验证码输入错误');
            $(".yZ").find($(".tips-errow")).css("color","#dd2726");
//            $(".yZ").find($(".cur")).show();
            $(".yanzhenginput").css("border-color","#dd2726");
            flag2 = false;
        }
    });


    /*
    * 短信验证码
    * */

//鼠标点进输入框时触发
    $(".duanxinyz").focus(function(){
        $(".dX").css("display","block");
        $(".dX").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发    //要有一个判断
    $(".duanxinyz").keydown(function(){
        $(".dX").find($(".tips-errow")).html('<i class="cur"></i>');
        $(".dX").find($(".tips-errow")).css("color","#333");
        $(".dX").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".duanxinyz").blur(function(){
        var reg1 = /^\d{4}$/;
        var str = $(".duanxinyz").val();
        if(reg1.test(str)){
            $(".dX").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".duanxinyz").css("border-color","#ccc");
            $(".dX").find($(".ok")).show();
            flag3 = true;
        }else{
            $(".dX").find($(".tips-errow")).html('<i class="error"></i>请输入四位数字验证码');
            $(".dX").find($(".tips-errow")).css("color","#dd2726");
            $(".dX").find($(".cur")).show();
            $(".duanxinyz").css("border-color","#dd2726");
            flag3 = false;
        }
    });


//        跳转下一页
        $(".next").click(function(){
            if(flag1==true&&flag2==true&&flag3==true){
                open("register2.html");
            }else{
                alert("请检查重新填写");
            }
        });
/*     注册页第一页结束       */


});

//手机获取验证码
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value="免费获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}