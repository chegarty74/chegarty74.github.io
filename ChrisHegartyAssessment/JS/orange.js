$(document).ready(function () {

    $("#schedule").click(function () {

        $("table").fadeIn(200);
        $("#closeButton").fadeIn(200);
    });

    $("#closeButton").click(function () {

        $("table").fadeOut(200);
        $("#closeButton").fadeOut(200);



        // My initial attempts to animate the nav links:
        // $("nav a").hover(function () {
        //  $("a").animate({
        //  height: "4vh"
        //   }, 1000);



    });
});
