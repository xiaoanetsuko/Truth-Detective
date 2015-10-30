/**
 * Created by MKRL on 10/23/15.
 */

$(function() {
    var images = ["img/char/beforeT/2.png","img/char/beforeT/3.png", "img/char/beforeT/4.png", "img/char/beforeT/time.png","img/char/chapterTutorial/1.png","img/char/chapterTutorial/2.png", "img/char/chapterTutorial/3.png", "img/char/chapterTutorial/4.png", "img/char/chapterTutorial/5.png", "img/char/chapterTutorial/tutorial_tips_5.png", "img/char/chapterTutorial/6.png", "img/char/chapterTutorial/7.png", "img/char/chapterTutorial/8.png", "img/char/chapterTutorial/9.png", "img/char/chapterTutorial/10.png" , "img/char/chapterTutorial/tutorial_tips_1.png","img/char/chapterTutorial/tutorial_tips_2.png", "img/char/chapterTutorial/tutorial_tips_3.png", "img/char/chapterTutorial/tutorial_tips_4.png","img/char/chapterTutorial/11.png"];
    var max = images.length;
    var num = 0;

    $("#nextButton").click(function () {
        if (num < max) {
            $(".imageswap").fadeOut(function () {
                $(this).attr("src", images[num]).fadeIn(600);
                num++;
            });
            $("#backButton, #nextButton, #skipButton").fadeOut(function (){
                $(this).fadeIn(600)
            });
            if (num == 15){
                $(".question").slideDown("slow");
                $("#checkinput").show();
            }
            if (num == max){
                $(".question").slideUp("slow");
                $("#checkinput").hide();
            }
        } else {
            skip()
        }
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