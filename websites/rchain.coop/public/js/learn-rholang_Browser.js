/* Side Nav (learn-rholang page) */
document.getElementById("tab").onclick = contentsExpand;

function contentsExpand() {
    document.getElementById("sideNav").classList.add("active");
}

document.getElementById("close").onclick = contentsCollapse;

function contentsCollapse() {
    document.getElementById("sideNav").classList.remove("active");
}