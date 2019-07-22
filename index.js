$(document).ready(function (){
    $(".secdiv3").click(function (){
        $('html, body').animate({
            scrollTop: $("#secdiv3").offset().top
        }, 1000);
    });
});
$(document).ready(function (){
    $(".secdiv2").click(function (){
        $('html, body').animate({
            scrollTop: $("#secdiv2").offset().top
        }, 1000);
    });
});
//download function
var display = document.getElementById("dwnld");
var num = 56;
display.innerHTML = num;
function dwnldbutton(){
    display.innerHTML = num++;
}
