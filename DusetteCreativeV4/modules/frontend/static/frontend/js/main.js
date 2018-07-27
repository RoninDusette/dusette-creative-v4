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
        let speed = Math.floor(Math.random().toFixed(2)*15+1);
        let delay = Math.floor(Math.random().toFixed(2)*20+1);
        let position = Math.floor(Math.random().toFixed(3)*2002+1);
        let size = Math.floor(Math.random().toFixed(1)*10+1);
        let sizePartial = Math.floor(Math.random().toFixed(1)*10+1);

        return [speed, delay, position, size, sizePartial];
    }

    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

$(document).ready(function() {
    const iconArray = [
        "fas fa-music",
        "fas fa-camera",
        "fas fa-download",
        "fas fa-location-arrow",
        "fas fa-html5",
        "fas fa-css3",
        "fas fa-share",
        "fas fa-commenting",
        "fas fa-maxcdn",
        "fas fa-rocket",
        "fas fa-500px",
        "fas fa-firefox",
        "fas fa-tablet",
        "fas fa-chrome",
        "fas fa-tags",
        "fas fa-chain-broken",
        "fas fa-wikipedia-w",
        "fas fa-code",
        "fas fa-terminal",
        "fas fa-location-arrow",
        "fas fa-reply-all",
        "fas fa-hand-spock-o",
        "fas fa-user-md",
        "fas fa-gamepad",
        "fas fa-folder-0",
        "fas fa-folder-open-o",
        "fas fa-github-alt",
        "fas fa-hand-rock-o",
        "fas fa-desktop",
        "fas fa-laptop",
        "fas fa-tablet",
        "fas fa-mobile",
        "fas fa-mouse-pointer",
        "fas fa-battery-half",
        "fas fa-fighter-jet",
        "fas fa-server",
        "fas fa-cutlery",
        "fas fa-cloud-download",
        "fas fa-cloud-upload",
        "fas fa-exchange",
        "fas fa-google-plus-square",
        "fas fa-tachometer",
        "fas fa-tachometer",
        "fas fa-tachometer",
        "fas fa-tachometer",
        "fas fa-tachometer",
        "fas fa-tachometer",
        "fas fa-tachometer",
        "fas fa-tachometer",

    ];

    let shuffledIconArray = shuffleArray(iconArray);

    $.each(shuffledIconArray, function (i, val) {

        let vals = doMath();

        let speed = vals[0];
        let delay = vals[1];
        let position = vals[2];
        let size = vals[3];
        let sizePartial = vals[4];

        $(".home-section-3-border").append("<i class='" + val + "' id='icon-" + i + "'></i>");

        $("#icon-" + i).css({
            "position": "absolute",
            "font-size": size + "." + sizePartial + "rem",
            "animation-delay": delay + "s",
            "animation-duration": speed + "s",
            "left": position + "px",
        });
    });
});