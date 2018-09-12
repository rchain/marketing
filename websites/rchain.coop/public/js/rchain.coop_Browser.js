window.onscroll = function () {
    navScroll()
};

function navScroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("nav").classList.add("scroll");
    } else {
        document.getElementById("nav").classList.remove("scroll");
    }

}


/* Nav Bar */
document.getElementById("hamburger").onclick = menuExpand;

function menuExpand() {
    var nav = document.getElementById("nav");
    var hamburger = document.getElementById("hamburger");
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        hamburger.classList.remove("change");
    } else {
        nav.classList.add("active");
        hamburger.classList.add("change");
    }
}

document.getElementById("dropdown").onclick = dropdown;

function dropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("active")){
        dropdown.classList.remove("active");
    } else {
        dropdown.classList.add("active");
    }
}



/* Footer Form */
$("#newsletterSubmit").click(function (event) {
    event.preventDefault();
    var data = $("#newsletterForm").serialize();
    $.ajax({
        type: "POST",
        url: "newsletter-submission",
        data: data,
        dataType: "json"
    }).done(function (data) {
        if (!(data[0] == "success")) {
            $("#submitFail").html("");
            for (var item in data) {
                $("#submitFail").css("display", "inline-block");
                $("#submitFail").append('<div class="errors">' + data[item] + "</div>");
            }
        } else {
            $("#submitFail").css("display", "none");
            $("#submitSuccess").css("display", "inline-block");
            $("#submitSuccess").append("<div class='success'>Thank you for your submission</div>");
            $("#newsletterForm").css("display", "none");
        }
    });
});
