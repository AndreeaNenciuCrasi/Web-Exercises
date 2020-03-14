$("div").css("background-color", "purple");
$("div.highlight").css("width", "200px");
$('#third').css("border", "2px solid orange");
$('div:first-of-type').css("color", "pink");
$('img').css("width", "500px");
$("#first").attr("type", "color");
$("#second").attr("type", "checkbox");
$('h1').addClass("correct");
$('li').addClass('wrong');
$('li').first().addClass('done');
$('button').click(function(){
    $(this).css("background-color", "pink");
});
$('button').on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});
$('button').on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});
$('#hideshow').on("click", function () {
$(".divclass").fadeToggle(1000);
// $(".divclass").slideToggle();
})