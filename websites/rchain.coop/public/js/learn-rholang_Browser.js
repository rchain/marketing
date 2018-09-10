/* Side Nav (learn-rholang page) */
document.getElementById("tab").onclick = contentsExpand;

function contentsExpand() {
    document.getElementById("sideNav").classList.add("active");
}

document.getElementById("close").onclick = contentsCollapse;

function contentsCollapse() {
    document.getElementById("sideNav").classList.remove("active");
}


$(".scroll").click(function () {
    var scrollId = $(this).attr("id");
    $('html, body').animate({
        scrollTop: ($("#" + scrollId + "Section").offset().top - 100)
    });
    return false;
});

/*
function quiz1() {
    if (this.val == "correct") {
        console.log("hi");
        document.getElementById("quiz1Correct").style.display = "block";
         document.getElementById("quiz1incorrect").style.display = "none";
    } else {
        console.log("by");
        document.getElementById("quiz1incorrect").style.display = "block";
        document.getElementById("quiz1Correct").style.display = "none";
    }
}
*/

$(function() {
    $('input[class="quiz"]').on('click', function() {
        var quiz = this.name;
        if ($(this).val() == 'correct') {
            $('#' + quiz + 'Correct').show();
            $('#' + quiz + 'incorrect').hide();
        }
        else {
            $('#' + quiz + 'Correct').hide();
            $('#' + quiz + 'incorrect').show();
        }
    });
});




