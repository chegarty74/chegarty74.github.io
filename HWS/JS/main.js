$(document).ready(function () {

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
    });

    //Code for mobile nav scroll toggle:

    $("#menu-toggle").click(function () {
        $("nav").slideToggle(500);
    });

    $(".navlinks").click(function () {
        $("nav").slideUp(500);
    });

});
