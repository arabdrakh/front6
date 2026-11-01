$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#btn-update-headline").click(function() {
        $("#headline").text("Junior Front-End Developer");
        $("h1").html("<em>Welcome to My Interactive Portfolio</em>");
    });

    $("#btn-change-style").click(function() {
        $(".intro").css({
            "color": "#0d6efd",
            "font-weight": "bold"
        });
        $("h2").css("letter-spacing", "1px");
    });

    $("#btn-dark-theme").click(function() {
        $("body").css({
            "background-color": "#1f242d",
            "color": "#ffffff"
        });
        $(".card").css({
            "background-color": "#2e3846",
            "border-color": "#475569"
        });
        $("button").css({
            "background-color": "#3b4554",
            "color": "#ffffff",
            "border-color": "#5a6678"
        });
        $(".accordion-header").css({
            "background-color": "#3b4554",
            "color": "#ffffff"
        });
        $(".accordion-panel").css({
            "background-color": "#252d38",
            "border-color": "#475569",
            "color": "#e0e0e0"
        });
    });

    $("#btn-light-theme").click(function() {
        $("body").css({
            "background-color": "#f4f6f9",
            "color": "#333333"
        });
        $(".card").css({
            "background-color": "#ffffff",
            "border-color": "#dddddd"
        });
        $("button").css({
            "background-color": "#e9ecef",
            "color": "#333333",
            "border-color": "#aaa"
        });
        $(".accordion-header").css({
            "background-color": "#e9ecef",
            "color": "#333333"
        });
        $(".accordion-panel").css({
            "background-color": "#fafafa",
            "border-color": "#e9ecef",
            "color": "#333333"
        });
    });

    $("#btn-hide-status").click(function() {
        $("#status-message").hide();
    });

    $("#btn-show-status").click(function() {
        $("#status-message").show();
    });

    $("#btn-toggle-status").click(function() {
        $("#status-message").toggle();
    });

    $("#btn-fade-out").click(function() {
        $(".gallery img").fadeOut();
    });

    $("#btn-fade-in").click(function() {
        $(".gallery img").fadeIn();
    });

    $("#btn-fade-toggle").click(function() {
        $(".gallery img").fadeToggle();
    });

    $(".accordion-header").click(function() {
        $(this).next(".accordion-panel").slideToggle();
    });

    $("#btn-slide-up").click(function() {
        $(".accordion-panel").slideUp();
    });

    $("#btn-slide-down").click(function() {
        $(".accordion-panel").slideDown();
    });

    $("#btn-slide-toggle").click(function() {
        $(".accordion-panel").slideToggle();
    });
});
