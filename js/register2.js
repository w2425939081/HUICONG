/**
 * Created by Administrator on 2016/11/4.
 */
$(function(){
    /*     注册页第二页开始      */
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    $("input").click(function(){
        $(this).css("border-color","blue")
    });
    /*
     * 验证会员用户名
     * */
    //鼠标点进输入框时触发
    $(".vip-userName").focus(function(){
        $(".yH").css("display","block");
        $(".yH").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发
    $(".vip-userName").keydown(function(){
        $(".yH").find($(".tips-errow")).html('<i class="cur"></i>用户名必须六位以上首字母不为数字');
        $(".yH").find($(".tips-errow")).css("color","#333");
        $(".yH").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".vip-userName").blur(function(){
        var reg1 =/^\w{6,}$/;
        var str = $(".vip-userName").val();
        if(reg1.test(str)){
            $(".yH").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".yH").find($(".ok")).show();
            $(".vip-userName").css("border-color","#ccc");
            flag1=true;
        }else{
            $(".yH").find($(".tips-errow")).html('<i class="error"></i>用户名必须六位以上首字母不为数字');
            $(".yH").find($(".tips-errow")).css("color","#dd2726");
            $(".vip-userName").css("border-color","#dd2726");
            $(".yH").find($(".error")).show();
            flag1=false;
        }
    });
    /*
     * 验证密码
     */
    //鼠标点进输入框时触发
    $(".passWord").focus(function(){
        $(".mM").css("display","block");
        $(".mM").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发
    $(".passWord").keydown(function(){
        $(".mM").find($(".tips-errow")).html('<i class="cur"></i>密码6-20位');
        $(".mM").find($(".tips-errow")).css("color","#333");
        $(".mM").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".passWord").blur(function(){
        var reg2 =/^\w{6,20}$/;
        var str = $(".passWord").val();
        if(reg2.test(str)){
            $(".mM").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".mM").find($(".ok")).show();
            $(".passWord").css("border-color","#ccc");
            flag2=true;
        }else{
            $(".mM").find($(".tips-errow")).html('<i class="error"></i>密码6-20位');
            $(".mM").find($(".tips-errow")).css("color","#dd2726");
            $(".passWord").css("border-color","#dd2726");
            $(".mM").find($(".error")).show();
            flag2=false;
        }
    });
    /*
     * 验证重复输入的密码是否正确
     */
    //鼠标点进输入框时触发
    $(".repassWord").focus(function(){
        $(".remM").css("display","block");
        $(".remM").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发
    $(".repassWord").keydown(function(){
        $(".remM").find($(".tips-errow")).html('<i class="cur"></i>与上次输入不同');
        $(".remM").find($(".tips-errow")).css("color","#333");
        $(".remM").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".repassWord").blur(function(){
        if($(".repassWord").val()==$(".passWord").val()){
            $(".remM").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".remM").find($(".ok")).show();
            $(".repassWord").css("border-color","#ccc");
            flag3=true;
        }else{
            $(".remM").find($(".tips-errow")).html('<i class="error"></i>与上次输入不同');
            $(".remM").find($(".tips-errow")).css("color","#dd2726");
            $(".passWord").css("border-color","#dd2726");
            $(".remM").find($(".error")).show();
            flag3=false;
        }
    });
    /*
     * 验证公司名称
     * */
    //鼠标点进输入框时触发
    $(".companyName").focus(function(){
        $(".cN").css("display","block");
        $(".cN").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发
    $(".companyName").keydown(function(){
        $(".cN").find($(".tips-errow")).html('<i class="cur"></i>请输入2-20位汉字');
        $(".cN").find($(".tips-errow")).css("color","#333");
        $(".cN").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".companyName").blur(function(){
        var reg4 =/^[\u4e00-\u9fa5]{2,6}$/;
        var str = $(".companyName").val();
        if(reg4.test(str)){
            $(".cN").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".cN").find($(".ok")).show();
            $(".companyName").css("border-color","#ccc");
            flag4=true;
        }else{
            $(".cN").find($(".tips-errow")).html('<i class="error"></i>请输入合法字符');
            $(".cN").find($(".tips-errow")).css("color","#dd2726");
            $(".companyName").css("border-color","#dd2726");
            $(".cN").find($(".error")).show();
            flag4=false;
        }
    });
    /*
     * 验证联系人手机号
     * */
    //鼠标点进输入框时触发
    $(".Num").focus(function(){
        $(".nU").css("display","block");
        $(".nU").find($(".cur")).show();
    });
    //键盘在输入框内按下时触发
    $(".Num").keydown(function(){
        $(".nU").find($(".tips-errow")).html('<i class="cur"></i>联系人是能联系上的手机号');
        $(".nU").find($(".tips-errow")).css("color","#333");
        $(".nU").find($(".cur")).show();
    });
    //当输入正确时触发
    $(".Num").blur(function(){
        var reg5 = /^1[34578]\d{9}$/;
        var str = $(".Num").val();
        if(reg5.test(str)){
            $(".nU").find($(".tips-errow")).html('<i class="ok"></i>');
            $(".nU").find($(".ok")).show();
            $(".Num").css("border-color","#ccc");
            flag5=true;
        }else{
            $(".nU").find($(".tips-errow")).html('<i class="error"></i>手机号必须以1开头的11位数字');
            $(".nU").find($(".tips-errow")).css("color","#dd2726");
            $(".Num").css("border-color","#dd2726");
            $(".nU").find($(".error")).show();
            flag5=false;
        }
    });
    /*     注册页第二页结束       */
    //        跳转下一页
    $(".next").click(function(){
        if(flag1==true&&flag2==true&&flag3==true&&flag4==true&&flag5==true){
            open("register3.html");
        }else{
            alert("请检查重新填写");
        }
    });
});