/**
 * Created by Christine on 10/27/2015.
 */
$(function(){
    var images = ["img/char/chapter3/2.png", "img/char/chapter3/3.png", "img/char/chapter3/4.png", "img/char/chapter3/5.png", "img/char/chapter3/6.png", "img/char/chapter3/7.png" ];
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
        } else {
            skip();

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

function showLastDialog(){

    var imagesLast = ["img/char/after4/2.png", "img/char/after4/3.png", "img/char/after4/4.png", "img/char/after4/5.png", "img/char/after4/6.png", "img/char/after4/7.png", "img/char/after4/8.png", "img/char/after4/9.png", "img/char/after4/10.png", "img/char/after4/11.png", "img/char/after4/12.png", "img/char/after4/13.png", "img/char/after4/14.png", "img/char/after4/15.png", "img/char/after4/16.png", "img/char/after4/17.png", "img/char/after4/18.png" ];
    var maxLast = imagesLast.length;
    var num = 0;

    $('#lastDialog').show();
    $("#checkinput").hide();
    $(".question").slideUp();

    //stop counter
    $('#winmessage').append('<div id="stopClock"></div>');
    timeTranslator(gameTime);
    $("#operationButtonBoxLast").fadeIn();
    console.log("showed last dialog");

    $("#nextButtonLast").click(function () {
        if (num < maxLast) {
            $(".last").fadeOut(function () {
                $(this).attr("src", imagesLast[num]).fadeIn(600);
                num++;
            });
            $("#backButtonLast, #nextButtonLast, #skipButtonLast").fadeOut(function (){
                $(this).fadeIn(600)
            });
        } else {
            skip()
        }
    });

    $("#backButtonLast").click(function () {
        if (num > 0) {
            $(".last").fadeOut(function () {
                num--;
                $(this).attr("src", imagesLast[num]).fadeIn(600);
            });
            $("#backButtonLast, #nextButtonLast, #skipButtonLast").fadeOut(function (){
                $(this).fadeIn(600)
            });
        }
    });

    $("#skipButtonLast").click(function () {
        skip()
    });

    function skip() {
        $("#backButtonLast, #nextButtonLast, #skipButtonLast").fadeOut();
        $('#lastDialog').hide();
        $(".winmask").css("opacity", 0.8).fadeIn(600);
        $('#winmessage').fadeIn(600)


    }



}
