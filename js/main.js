$(function() {
    //index
    $(".index-main .row div").css({ opacity: 0.8 });
    $(".index-main .row div a").hover(
        function() {
            $(this)
                .parent()
                .css({ opacity: 1 });
            $(this)
                .find("img")
                .css({ transform: "scale(1.008)" });
            $(this)
                .find("p")
                .css({ backgroundColor: "rgba(0,0,0,0.7)" });
        },
        function() {
            $(".index-main .row div").css({ opacity: 0.8 });
            $(this)
                .find("img")
                .css({ transform: "" });
            $(this)
                .find("p")
                .css({ backgroundColor: "" });
        }
    );
    //company slide
    var index = 0;
    var len = $(".slide").length;
    $(".slide")
        .stop()
        .hide()
        .eq(index)
        .show();
    setInterval(function() {
        index += 1;
        if (index == len) {
            index = 0;
        }
        $(".slide")
            .stop()
            .hide()
            .eq(index)
            .show();
    }, 3000);
    // join-icon
    $(".intro-wrap figure figcaption").hover(
        function() {
            $(".intro-wrap figure figcaption p").css({ display: "none" });
            $(this)
                .find("p")
                .css({ display: "block" });
            $(this)
                .siblings()
                .show("linear");
        },
        function() {
            $(this)
                .find("p")
                .css({ display: "" });
            $(this)
                .siblings()
                .hide();
        }
    );
    //join img

    //join zhaopin
    $(".job-classify p").click(function() {
        var i = $(this).index();
        $(".job-classify p").css({
            backgroundColor: "",
            color: ""
        });
        $(this).css({
            backgroundColor: "#4e98cc",
            color: "#fff"
        });
        $(this)
            .parent()
            .siblings("div:nth-child(" + (i + 7) + ")")
            .slideToggle({
                display: "block"
            });
    });
    //product
    $(".enter-btn").hover(
        function() {
            $(this).attr("src", "../image/pro-enter-btn-act.png");
        },
        function() {
            $(this).attr("src", "../image/pro-enter-btn.png");
        }
    );
    $("#pro-icon1").hover(
        function() {
            $(this).attr("src", "../image/pro-periphery-icon-act.png");
        },
        function() {
            $(this).attr("src", "../image/pro-periphery-icon.png");
        }
    );
    $("#pro-icon2").hover(
        function() {
            $(this).attr("src", "../image/pro-cartoon-icon-act.png");
        },
        function() {
            $(this).attr("src", "../image/pro-cartoon-icon.png");
        }
    );
    // contact
    $("#link-btn1").click(function() {
        $(this)
            .css({ backgroundColor: "#4cd7e8" })
            .siblings()
            .css({ backgroundColor: "" });
        $(".link-dot").animate({ left: "9.5rem" }, 500);
        $(".shanghai")
            .show()
            .next()
            .hide();
    });
    $("#link-btn2").click(function() {
        $(this)
            .css({ backgroundColor: "#4cd7e8" })
            .siblings()
            .css({ backgroundColor: "" });
        $(".link-dot").animate({ left: "35rem" }, 500);
        $(".shanghai")
            .hide()
            .next()
            .show();
    });
});