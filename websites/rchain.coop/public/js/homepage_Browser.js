function navScroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("white").style.visibility = "hidden";
        document.getElementById("red").style.visibility = "visible";
         document.getElementById("nav").classList.add("scroll");
    } else {
       document.getElementById("white").style.visibility = "visible";
        document.getElementById("red").style.visibility = "hidden"; document.getElementById("nav").classList.remove("scroll");
    }

}