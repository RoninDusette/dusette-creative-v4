// Home hero text slide effect


$(document).ready(function() {
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


// Home What I Do fade effect

$(document).ready(function () {
    $('#home-what-i-do-box-1, #home-what-i-do-box-2, #home-what-i-do-box-3').hide();
});

$(window).scroll(function () {
    if ($(window).scrollTop() <= 900) {
        $('#home-what-i-do-box-1').fadeIn("slow", function () {
        $('#home-what-i-do-box-2').fadeIn("slow", function () {
           $('#home-what-i-do-box-3').fadeIn("slow");
        });
    });
    }
});