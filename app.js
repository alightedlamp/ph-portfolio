require.config({
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore",
    "data": "lib/data"
  }
});

require(['jquery', 'underscore', 'data', 'lib/modules/nav', 'lib/modules/gallery'],
    function($, _, data, nav, gallery) {

    // Prevents css transitions until window load
    $(document).ready(function() {
        $("body").removeClass("preload");
    });

    // var domesticPaintingsGalleryEl = $("#domestic-paintings");
    // var domesticPaintingsGallery = new gallery.GalleryView(data.galleries.domesticPaintingCards, domesticPaintingsGalleryEl);
    var pourPaintingsGalleryEl = $("#pour-paintings");
    var pourPaintingsGallery = new gallery.GalleryView(data.galleries.pourPaintingCards, pourPaintingsGalleryEl);

    // domesticPaintingsGallery.createCards();
    pourPaintingsGallery.createCards();

    var cardView = new gallery.CardView();

    $(".card").on("click", function() {
        var choice = $(this).parent().attr("id") + "-" + $(this).attr("id").replace("card-", "");
        var choice = $(this).attr("id").replace("card-", "");
        cardView.showCard(choice);
    });
    $("#previous-card").on("click", function() {
        cardView.showPrevious();
    });
    $("#next-card").on("click", function() {
        cardView.showNext();
    });
});