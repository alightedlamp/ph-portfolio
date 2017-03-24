// var button = document.querySelector(".btn-hero");
// var hero = document.querySelector("#hero");
// var content = document.querySelector("#main-content");

// edit hover effects so if a sub-item is clicked, it remains focused
// $('h1.title').hover(function() {
//     $(this).html('<h1 class="title">philip harrell</h1>');
// });
$(".btn-hero").on("click", function() {
    $("#main-content").fadeIn().css("visibility", "visible");
    $("#hero").fadeIn().css("display", "none");
});
$("#apps-link").on("click", function() {
    $("#apps").slideToggle("fast");
    $("#projects-info").slideToggle("fast");
});
$("#menu-toggle").on("click", function() {
    $("#nav ul.nav").slideToggle("fast");
});