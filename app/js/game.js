/**
 * Created by ры on 2015/9/21.
 */




$(document).ready( function() {



    var loadedImages = [];
    //var urlPatterns = ["flickr.com", "nla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au", "images.slsa.sa.gov.au"];
    var urlPatterns = ["nla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au", "images.slsa.sa.gov.au"];

    //$("form#searchTrove").submit(function(event) {
    //    event.preventDefault();
    //
    //    loadedImages = [];
    //
    //    //get input values
    //    var searchTerm = $("#searchTerm").val().trim();
    //    searchTerm = searchTerm.replace(/ /g, "%20");
    //    var sortBy = $("#sortBy").val();
    //    var apiKey = "5ojt8mghlf9s8ahc";
    //
    //    //create searh query
    //    var url = "http://api.trove.nla.gov.au/result?key=" + apiKey + "&l-availability=y%2Ff&encoding=json&zone=picture" + "&sortby=relevance&n=100&q=" + searchTerm + "&callback=?";
    //
    //    //get the JSON information we need to display the images
    //    $.getJSON(url, function(data) {
    //        $('#output').empty();
    //        console.log(data);
    //        $.each(data.response.zone[0].records.work, processImages);
    //        printImages();
    //    });
    //});


    $("#canvas>div.checkpoint").click(function () {
        loadedImages = [];

        var id = $(this).attr("id");
        console.log(id);

        var apiKey = "jsk1qqntnrj7qbvf";

        var requestUrl = "http://api.trove.nla.gov.au/work/" + id + "?encoding=json&key=" + apiKey + "&callback=?";

        console.log(requestUrl);

        console.log(requestUrl === "http://api.trove.nla.gov.au/work/22743028?encoding=json&key=jsk1qqntnrj7qbvf&callback=?");

        clueWindow();

        $.ajax({
            type: "GET",
            url:"http://api.trove.nla.gov.au/work/22743028?encoding=json&key=jsk1qqntnrj7qbvf&callback=?",
            dataType: "json",
            contentType: "application/json; charset=utf-8",

            success: function(data) {
                var imgUrl = data.work.identifier[0].value;
                var troveObj = data.work;

                processImages(imgUrl, troveObj);
                printImages();
            }
        });
    });

    // create a pop-up form

    function clueWindow() { // when click register button, the form will pop up.
        $(".mask").css("opacity", 0.8).fadeIn(600); // mask-up level shows up
        $("#window").show().animate({top: 128}, 500, "easeOutQuad"); // register form moves from the top of window.
        //printImages();
    }


    $(".mask, .close").click(function() {
        $("#window").animate({top: -864}, 500, "easeOutQuad", // set move out animation of form
            function() { // form disappears by animation
                $("#window").hide(); // display: none
            });
        $(".mask").fadeOut(600); // mask-up level fadeout
        $('#game #canvas .showImage').empty();
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

});