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
    });
});
