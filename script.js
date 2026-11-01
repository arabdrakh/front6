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
        $(".live-preview").css({
            "background-color": "#252d38",
            "border-color": "#475569",
            "color": "#ffffff"
        });
        $("input").css({
            "background-color": "#1f242d",
            "color": "#ffffff",
            "border-color": "#475569"
        });
        $(".skill-track").css("background-color", "#3b4554");
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
        $(".live-preview").css({
            "background-color": "#eef2f7",
            "border-color": "#d0d7de",
            "color": "#333333"
        });
        $("input").css({
            "background-color": "#ffffff",
            "color": "#333333",
            "border-color": "#cccccc"
        });
        $(".skill-track").css("background-color", "#e9ecef");
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

    $("#btn-append-skill").click(function() {
        var skill = $("#skill-input").val().trim();
        if (skill !== "") {
            $("#skill-list").append("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#btn-prepend-skill").click(function() {
        var skill = $("#skill-input").val().trim();
        if (skill !== "") {
            $("#skill-list").prepend("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#btn-remove-skill").click(function() {
        $("#skill-list li").last().remove();
    });

    $("#btn-change-attr").click(function() {
        var currentHref = $("#social-link").attr("href");
        if (currentHref === "https://github.com") {
            $("#social-link").attr("href", "https://linkedin.com");
            $("#social-link").text("Visit LinkedIn Profile");
            $(this).text("Switch to GitHub");
        } else {
            $("#social-link").attr("href", "https://github.com");
            $("#social-link").text("Visit GitHub Profile");
            $(this).text("Switch to LinkedIn");
        }
    });

    $("#form-name").on("input", function() {
        var nameVal = $(this).val();
        $("#live-name").text(nameVal);
    });

    $("#form-email").on("input", function() {
        var emailVal = $(this).val();
        $("#live-email").text(emailVal);
    });

    var isSkillsAnimated = false;

    $("#btn-animate-skills").click(function() {
        if (!isSkillsAnimated) {
            $("#fill-html").animate({ width: "90%" }, 800);
            $("#fill-css").animate({ width: "80%" }, 800);
            $("#fill-js").animate({ width: "70%" }, 800);
            isSkillsAnimated = true;
        } else {
            $("#fill-html").animate({ width: "0%" }, 800);
            $("#fill-css").animate({ width: "0%" }, 800);
            $("#fill-js").animate({ width: "0%" }, 800);
            isSkillsAnimated = false;
        }
    });
});
