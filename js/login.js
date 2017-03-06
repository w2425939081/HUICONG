/**
 * Created by Administrator on 2016/11/5.
 */
//1、focus时，用ajax请求json数据，获取到用户名
//2、blur时，判断用户名是否存在。  str == $(".str").val()
//var obj = eval("("+temp+")");
//var str = obj.username;
//if(str == $(".str").val())
$(function(){
    var flag= false;
    $(".username").blur(function () {
        var url="../json/login.json";
        $.ajax({
            type:"get",
            url:url,
            success: function (response,status,xhr) {
                if($(".username").val()!=response.username){
                    $(".icon-c").show();
                    flag= false;
                }else{
                    $(".icon-c").hide();
                    flag = true;
                }
            }

        })
    });
    $(".password").blur(function(){
        var url="../json/login.json";
        $.ajax({
            type:"get",
            url:url,
            success: function (response,status,xhr) {
                if(flag=true&&$(".password").val()==response.password){
                    open("../html/index.html");
                }else{
                    alert("密码错误，请重新输入");
                }
            }

        })

    });

});
