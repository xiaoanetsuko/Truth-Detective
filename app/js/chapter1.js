/**
 * Created by Christine on 10/27/2015.
 */
$(function(){
    var images = ["img/char/chapter1/2.png", "img/char/chapter1/3.png", "img/char/chapter1/4.png", "img/char/chapter1/5.png", "img/char/chapter1/6.png", "img/char/chapter1/7.png", "img/char/chapter1/8.png", "img/char/chapter1/9.png", "img/char/chapter1/10.png", "img/char/chapter1/11.png", "img/char/chapter1/12.png"];
    var max = images.length;
    var num = 0;

    $("#submit").click(function(e) {
        e.preventDefault();
        var arrT = ["France", "france", "French", "french"];
        var arr1 = ["Louis XVI", "louis XVI", "Louis 16", "louis 16"];
        var inputValT = $('#questionT').val();
        var inputVal1 = $('#question1').val();
        if ($.inArray(inputVal1, arr1) > -1) {
            switch (inputVal1) {
                case arr1[0]:
                    console.log("Louis XVI correct");
                    winmessage();
                    break;
                case arr1[1]:
                    //alert("louis XVI correct");
                    winmessage();
                    break;
                case arr1[2]:
                    //alert("Louis 16 correct");
                    winmessage();
                    break;
                case arr1[3]:
                    //alert("louis 16 Correct");
                    winmessage();
                    break;
                default:
                    //alert("Incorrect Answer!");
                    break;
            }
        }
        else if ($.inArray(inputValT, arrT) > -1) {
            switch (inputValT) {
                case arrT[0]:
                    winmessage();
                    break;
                case arrT[1]:
                    winmessage();
                    break;
                case arrT[2]:
                    winmessage();
                    break;
                case arrT[3]:
                    winmessage();
                    break;
                default:
                    alert("Incorrect Answer!");
                    break;
            }
        }
        else {alert("Incorrect Answer!");}
    });

    function winmessage(){
        $(".winmask").css("opacity", 0.8).fadeIn(600);
        //stop counter
        $('#winmessage').append('<div id="stopClock"></div>').fadeIn(600);
        timeTranslator(gameTime);
    }

    function timeTranslator (second) {
        var scale = 60;
        var sec = 0;
        var min = 0;
        var hour = 0;
        if ((second / scale) > 1 ) {
            min = parseInt(second / scale);
            sec = second % scale;
            if ((min / scale) > 1 ) {
                hour = parseInt(min / scale);
                min %= scale;
            }
        }else{ sec = second }
        $("#content p").append(strTime(hour, min, sec));
        console.log(strTime(hour, min, sec));
    }

    function strTime(hour, min, sec) {
        var strHour;
        var strMin;
        var strSec;
        if (hour < 10) {
            strHour = "0" + hour.toString();
        }else{
            strHour = hour.toString();
        }
        if (min < 10) {
            strMin = "0" + min.toString();
        }else{
            strMin = min.toString();
        }
        if (sec < 10) {
            strSec = "0" + sec.toString();
        }else{
            strSec = sec.toString();
        }
        return strHour + " : " + strMin + " : " + strSec;
    }

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