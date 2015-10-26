/**
 * Created by MKRL on 10/23/15.
 */

$(function() {
    var images = ["../img/char/chapterTutorial/2.png", "../img/char/chapterTutorial/3.png", "../img/char/chapterTutorial/4.png", "../img/char/chapterTutorial/5.png", "../img/char/chapterTutorial/6.png", "../img/char/chapterTutorial/7.png", "../img/char/chapterTutorial/8.png", "../img/char/chapterTutorial/9.png", "../img/char/chapterTutorial/10.png", "../img/char/chapterTutorial/11.png", "../img/char/chapterTutorial/tutorial_tips_1.png", "../img/char/chapterTutorial/tutorial_tips_2.png", "../img/char/chapterTutorial/tutorial_tips_3.png", "../img/char/chapterTutorial/tutorial_tips_4.png"];
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
            if (num == 10){
                $(".question").slideDown("slow");
                $("#checkinput").show();
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