/**
 * Created by Christine on 10/27/2015.
 */
$(function(){
    var images = ["img/char/chapter1/2.png", "img/char/chapter1/3.png", "img/char/chapter1/4.png", "img/char/chapter1/5.png", "img/char/chapter1/6.png", "img/char/chapter1/7.png", "img/char/chapter1/8.png", "img/char/chapter1/9.png", "img/char/chapter1/10.png", "img/char/chapter1/11.png", "img/char/chapter1/12.png"];
    var max = images.length;
    var num = 0;

    $("#nextButton").click(function () {
        if (num < max-1) {
            $(".imageswap").fadeOut(function () {
                num++;
                $(this).attr("src", images[num]).fadeIn(600);
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