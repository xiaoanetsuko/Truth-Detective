/**
 * Created by Christine on 10/27/2015.
 */
$("#submit").click(function(e) {
    e.preventDefault();
    var arrT = ["France", "france", "French", "french"];
    var arr1 = ["Louis XVI", "louis XVI", "Louis 16", "louis 16"];
    var arr2 = ["London", "london"];
    var arr3 = ["Industrial Revolution", "industrial revolution", "Industrial revolution", "industrial Revolution" ];
    var inputValT = $('#questionT').val();
    var inputVal1 = $('#question1').val();
    var inputVal2 = $('#question2').val();
    var inputVal3 = $('#question3').val();
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
    else if ($.inArray(inputVal2, arr2) > -1) {
        switch (inputVal2) {
            case arr2[0]:
                winmessage();
                break;
            case arr2[1]:
                winmessage();
                break;
            default:
                alert("Incorrect Answer!");
                break;
        }
    }
    else if ($.inArray(inputVal3, arr3) > -1) {
        switch (inputVal3) {
            case arr3[0]:
                winmessage();
                break;
            case arr3[1]:
                winmessage();
                break;
            case arr3[2]:
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
