require.config({
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore",
    "data": "lib/data",
    "blog": "lib/modules/blog"
  }
});

require(['jquery', 'underscore', 'data', 'lib/modules/nav', 'lib/modules/gallery', 'blog'],
    function($, _, data, nav, gallery) {

    // Prevents css transitions until window load
    $(document).ready(function() {
        $("body").removeClass("preload");
    });

    // var domesticPaintingsGalleryEl = $("#domestic-paintings");
    // var domesticPaintingsGallery = new gallery.GalleryView(data.galleries.domesticPaintingCards, domesticPaintingsGalleryEl);
    // var pourPaintingsGalleryEl = $("#pour-paintings");
    // var pourPaintingsGallery = new gallery.GalleryView(data.galleries.pourPaintingCards, pourPaintingsGalleryEl);

    // domesticPaintingsGallery.createCards();
    // pourPaintingsGallery.createCards();

    var cardView = new gallery.CardView();

    $(".card").on("click", function() {
        console.log($(".gallery-view").css("display", "none"));
        if ($(".gallery-view").css("display", "none")) {
            var choice = $(this).parent().attr("id") + "-" + $(this).attr("id").replace("card-", "");
            var choice = $(this).attr("id").replace("card-", "");
            cardView.showCard(choice);
        }
    });
    $("#previous-card").on("click", function() {
        cardView.showPrevious();
    });
    $("#next-card").on("click", function() {
        cardView.showNext();
    });

    var blogEntries = getEntries(url, function(response) {
        var entries = JSON.parse(response);
        entries = entries.posts;
        for (var i = 0; i < 2; i++) {
            $("#blog-posts").append("<h3>" + entries[i].title + "</h3>");
            $("#blog-posts").append("<h4><small>" + entries[i].date.split("T")[0] + "</small></h4>");
            $("#blog-posts").append("<p>" + entries[i].excerpt + "</p>");
            $("#blog-posts").append("<a href='" + entries[i].URL + "' target='_blank'>Read more</a>");
        }
    });
});