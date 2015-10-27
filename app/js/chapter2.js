/**
 * Created by Christine on 10/27/2015.
 */
$(function(){
    var images = ["../img/char/chapter1/renzhen1.png", "../img/char/chapter1/fanpai1.png", "../img/char/chapter1/xiaoyihuo1.png", "../img/char/chapter1/fanpai2.png", "../img/char/chapter1/jingya1.png", "../img/char/chapter1/fanpai3.png", "../img/char/chapter1/fanpai4.png", "../img/char/chapter1/xiaozhang1.png", "../img/char/chapter1/yamao1.png", "../img/char/chapter1/weixiao1.png", "../img/char/chapter1/weixiao2.png"];
    var max = images.length;
    var num = 0;
    $("#nextButton").click(function () {
        if (num < max-1) {
            $(".imageswap").fadeOut(function () {
                $(this).attr("src", images[num]).fadeIn(600);
                num++;
                console.log(num)
            });
            $("#backButton, #nextButton, #skipButton").fadeOut(function (){
                $(this).fadeIn(600)
            });
        } else { skip() }
    });

    $("#backButton").click(function () {
        if (num > 0) {
            $(".imageswap").fadeOut(function () {
                num--;
                $(this).attr("src", images[num]).fadeIn(600);
            });
            $("#backButton, #nextButton, #skipButton").fadeOut(function (){
                $(this).fadeIn(600)
            });
        }
    });

    $("#skipButton").click(function () {
        skip()
    });

    function skip() {
        $("#imagebox, #nextButton, #backButton, #skipButton").fadeOut();
        $(".question").slideDown("slow");
        $("#checkinput").show();
        $('#countdown').countup();
    }
});