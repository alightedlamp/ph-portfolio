// var button = document.querySelector(".btn-hero");
// var hero = document.querySelector("#hero");
// var content = document.querySelector("#main-content");

$(".btn-hero").on("click", function() {
    $("#main-content").fadeIn().css("visibility", "visible");
    $("#hero").fadeIn().css("display", "none");
});
$("#menu-toggle").on("click", function() {
    $("#nav ul.nav").slideToggle("fast");
});