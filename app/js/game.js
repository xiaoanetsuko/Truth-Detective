/**
 * Created by �� on 2015/9/21.
 */




$(document).ready( function() {



    var loadedImages = [];
    //var urlPatterns = ["flickr.com", "nla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au", "images.slsa.sa.gov.au"];
    var urlPatterns = ["nla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au", "images.slsa.sa.gov.au"];


    //if it is a Trove Data


    $("#canvas>div.checkpoint").click(function () {


        if ($(this).attr("id")){

            loadedImages = [];

            var id = $(this).attr("id");
            console.log(id);

            var apiKey = "5ojt8mghlf9s8ahc";

            var requestUrl = "http://api.trove.nla.gov.au/work/" + id + "?encoding=json&key=" + apiKey + "&callback=?";

            console.log(requestUrl);

            console.log(requestUrl === "http://api.trove.nla.gov.au/work/22743028?encoding=json&key=jsk1qqntnrj7qbvf&callback=?");

            clueWindow();

            $.ajax({
                type: "GET",
                url:requestUrl,
                dataType: "json",
                contentType: "application/json; charset=utf-8",

                success: function(data) {
                    var imgUrl = data.work.identifier[0].value;
                    var troveObj = data.work;

                    processImages(imgUrl, troveObj);
                    printImages();
                }
            });

        } else {

            clueWindow();
            //console.log(src);
            //image.style.display = "inline-block";
            //image.style.width = 200px;
            //image.style.margin = "1%";
            //image.style.verticalAlign = "top";

            $('#game #canvas .showImage').append('<img ng-src="{{image}}">');
            //image.style.backgound = src;
            $('#game #canvas .showImage img').addClass("clueImage");
        }


    });


    //if it is not a Trove Data




    // create a pop-up form

    function clueWindow() { // when click register button, the form will pop up.
        $(".mask").css("opacity", 0.8).fadeIn(600); // mask-up level shows up
        $("#window").show().animate({top: 128}, 500, "easeOutQuad"); // register form moves from the top of window.
        //printImages();
        $(".question").hide()
    }


    $(".mask, .close").click(function() {
        $("#window").animate({top: -864}, 500, "easeOutQuad", // set move out animation of form
            function() { // form disappears by animation
                $("#window").hide(); // display: none
            });
        $(".mask").fadeOut(600); // mask-up level fadeout
        $('#game #canvas .showImage').empty();
        $(".question").slideDown("slow")
    });

    /*
     *   Depending where the image comes from, there is a special way to get that image from the website.
     *   This function works out where the image is from, and gets the image URL
     */
    function processImages(url, troveObj) {   //index, troveItem
        var imgUrl = url;
        //if (imgUrl.indexOf(urlPatterns[0]) >= 0) { // flickr
        //
        //    addFlickrItem(imgUrl, troveItem);
        //
        //} else
        console.log(imgUrl);
        console.log("Haha");

        if (imgUrl.indexOf(urlPatterns[0]) >= 0) { // nla.gov

            loadedImages.push({
                url: imgUrl + "/representativeImage?wid=900", // change ?wid=900 to scale the image
                obj: troveObj
            });

        } else if (imgUrl.indexOf(urlPatterns[1]) >= 0) { //artsearch

            loadedImages.push({
                url: "http://artsearch.nga.gov.au/IMAGES/LRG/" + getQueryVariable("IRN", imgUrl) + ".jpg",
                obj: troveItem
            });

        } else if (imgUrl.indexOf(urlPatterns[2]) >= 0) { //recordsearch

            loadedImages.push({
                url: "http://recordsearch.naa.gov.au/NAAMedia/ShowImage.asp?T=P&S=1&B=" + getQueryVariable("Number", imgUrl),
                obj: troveItem
            });

        } else if (imgUrl.indexOf(urlPatterns[3]) >= 0) { //slsa

            loadedImages.push({
                url:  imgUrl.slice(0, imgUrl.length - 3) + "jpg",
                obj: troveItem
            });

        }
    }

    //function addFlickrItem(imgUrl, troveItem) {
    //    var flickr_key = "a4d0bf2f4bde0595521b7bd8317ec428";
    //    var flickr_secret = "efc7221b694ff55e";
    //    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + flickr_key + "&photo_id=";
    //    var url_comps = imgUrl.split("/");
    //    var photo_id = url_comps[url_comps.length - 1];
    //
    //    $.getJSON(flickr_url + photo_id + "&format=json&nojsoncallback=1", function(data) {
    //        if (data.stat == "ok") {
    //            var flickr_image_url = data.sizes.size[data.sizes.size.length - 1].source;
    //            loadedImages.push({
    //                url: flickr_image_url,
    //                obj: troveItem
    //            });
    //        }
    //    });
    //
    //}

    function printImages() {


        // If we want, we can also access the trove object with each image by using loadedImages[i].obj
        for (var i in loadedImages) {
            var image = new Image();
            image.src = loadedImages[i].url;
            //console.log(src);
            //image.style.display = "inline-block";
            //image.style.width = 200px;
            //image.style.margin = "1%";
            //image.style.verticalAlign = "top";

            $('#game #canvas .showImage').append(image);
            //image.style.backgound = src;
            $('#game #canvas .showImage img').addClass("clueImage");
        }

    }

    // from http://css-tricks.com/snippets/javascript/get-url-variables/
    // this function use to get image on artsearch / recordsearch
    function getQueryVariable(variable, url) {
        var query = url.split("?");
        var vars = query[1].split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }

    function setHalfVolume() {
        var myAudio = document.getElementById("audio1");
        myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
    }

    //$( "#btnskip" ).click(function () {
    //    if ($(".question:first #checkinput:first").is(":hidden")) {
    //        $(".question #checkinput").slideDown("slow");
    //    } else {
    //        $(".question #checkinput").hide();
    //
    //    }
    //});






    $("#submit").click(function(e) {
        e.preventDefault();


        var arrT = ["a", "b", "c", "d"];
        var arr1 = ["Louis XVI", "louis XVI", "Louis 16", "louis 16"];

        var inputValT = $('#questionT').val();
        var inputVal1 = $('#question1').val();

        if ($.inArray(inputVal1, arr1) > -1) {
            switch (inputVal1) {
                case arr1[0]:
                    alert("Louis XVI correct");
                    break;
                case arr1[1]:
                    alert("louis XVI correct");
                    break;
                case arr1[2]:
                    alert("Louis 16 correct");
                    break;
                case arr1[3]:
                    alert("louis 16 Correct");
                    break;
                default:
                    alert("Incorrect Answer!");
                    break;
            }
        }
        else if ($.inArray(inputValT, arrT) > -1) {
            switch (inputValT) {
                case arrT[0]:
                    alert("a correct");
                    break;
                case arrT[1]:
                    alert("b correct");
                    break;
                case arrT[2]:
                    alert("c correct");
                    break;
                case arrT[3]:
                    alert("d Correct");
                    break;
                default:
                    alert("Incorrect Answer!");
                    break;
            }
        }



        else {alert("Incorrect Answer!");}
    });





});