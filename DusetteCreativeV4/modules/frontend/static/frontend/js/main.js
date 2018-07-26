// Things to hide on initial page load (before content is rendered)

$("#loader-wrapper").hide();
$(".navbar, .navbar-underlay").hide();


// Page loader animation

function pageLoading() {
    $("#loader-wrapper").fadeIn("slow", function () {
        dusetteLoader();
    })
}


function dusetteLoader() {
    dusetteLoader = setTimeout(showPage, 1);
}

function showPage() {
    $("#loader-wrapper").fadeOut();
    $("#site-content").fadeIn();
    $("#home-hero-wrapper").fadeIn();
    homeHeroTextLoader();
    slideInNavbar();
}


// slide in nav

function slideInNavbar() {
    setTimeout(function () {
        $(".navbar-underlay").fadeIn(400, function () {
            $(".navbar").slideDown(400);
        });
        }, 500);
}

// Home hero text slide effect

function homeHeroTextLoader() {
    homeHeroTextLoader = setTimeout(function () {
        var string = $('.home-hero-text > h1 > strong').text();
        $('.home-hero-text > h1 > strong').html('');
        var stringTrimmed = $.trim(string);
        var arr = $.map(stringTrimmed.split(''), function (letter) {
            return $('<span>' + letter + '</span>')
        });

        var destination = $('.home-hero-text > h1 > strong');

        var c = 0;

        var i = setInterval(function () {
            if (c === 24) arr[c].appendTo(destination).html("<br/>");
            arr[c].appendTo(destination).hide().fadeIn(500);
            c += 1;

            if (c >= arr.length) clearInterval(i)
        }, 75);
    });
}

// Home What I Do fade effect

$(document).ready(function () {
    $('#home-what-i-do-box-1, #home-what-i-do-box-2, #home-what-i-do-box-3').hide();
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
        $('#home-what-i-do-box-1').fadeIn("slow", function () {
            $('#home-what-i-do-box-2').fadeIn("slow", function () {
                $('#home-what-i-do-box-3').fadeIn("slow");
            });
        });
    }
});



// Section 3 effects

$(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        $(".home-section-3-border").addClass(" home-section-3-border-in-view", function () {

        });
    }
});

    function doMath() {
        let speed = Math.floor(Math.random().toFixed(2)*20+1);
        let delay = Math.floor(Math.random().toFixed(2)*20+1);
        let position = Math.floor(Math.random().toFixed(5)*2002+1);

        return [speed, delay, position];
    }


$(document).ready(function() {
    const iconArray = [
        "fas fa-compass",
        "fas fa-collapse",
        "fas fa-lightbulb",
        "fas fa-location-arrow",
        "fas fa-lock",
        "fas fa-magic",
        "fas fa-share",
        "fas fa-star-half-full",
        "fas fa-subscript",
        "fas fa-suitcase",
        "fas fa-sun",
        "fas fa-superscript",
        "fas fa-tablet",
        "fas fa-tag",
        "fas fa-tags",
        "fas fa-dollar",
        "fas fa-ambulance",
        "fas fa-h-sign",
        "fas fa-hospital",
        "fas fa-medkit",
        "fas fa-plus-sign-alt",
        "fas fa-stethoscope",
        "fas fa-user-md"];


    $.each(iconArray, function (i, val) {

        let vals = doMath();
        let speed = vals[0];
        let delay = vals[1];
        let position = vals[2];
        console.log(speed, delay, position);

        $(".home-section-3-border").append("<i class='" + val + "' id='icon-" + i + "'></i>");

        $("#icon-" + i).css({"position": "absolute", "width": "60px", "animation-delay": delay + "s", "animation-speed": speed + "s", "left": position + "px"});
    });
});