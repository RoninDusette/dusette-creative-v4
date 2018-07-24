$(document).ready(function() {
    $('.home-hero-wrapper *').slideDown("slow");
});

$(window).scroll(function () {
    if ($(window).scrollTop() <= 900) {
        $('#home-what-i-do-box-1').slideDown("slow", function () {
        $('#home-what-i-do-box-2').fadeIn("slow", function () {
           $('#home-what-i-do-box-3').slideDown("slow");
        });
    });
    }
});