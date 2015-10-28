/**
 * Created by Christine on 10/27/2015.
 */
$("#submit").click(function(e) {
    e.preventDefault();
    var inputValT, inputVal1, inputVal2, inputVal3;

    if($('#questionT').val()) {
        inputValT = $('#questionT').val().toLowerCase();
        if (inputValT == "france" || inputValT =="french") {
            winmessage()
        }
        else {wrongAnswer()}
    }
    if($('#question1').val()) {
        inputVal1 = $('#question1').val().toLowerCase();
        if (inputVal1=="louis xvi" || inputVal1=="louis 16") {
            winmessage()
        }
        else {wrongAnswer()}
    }
    if($('#question2').val()) {
        inputVal2 = $('#question2').val().toLowerCase();
        if (inputVal2=="london") {
            winmessage()
        }
        else {wrongAnswer()}
    }
    if($('#question3').val()) {
        inputVal3 = $('#question3').val().toLowerCase();
        if (inputVal3=="industrial revolution") {
            winmessage()
        }
        else {wrongAnswer()}
    }
});

function wrongAnswer() {
    $("#wrongMask").fadeIn(200);
    $("#checkinput").fadeOut(100);
}

$("#continueButton").click(function () {
    $("#wrongMask").fadeOut(200);
    $("#checkinput").delay(100).fadeIn(100)
});

$("#clear").click(function () {
    $("input.game-input").val("");
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
