define(['underscore', 'jquery', 'data'], function(_, $, data) {
    var currentCard = 0;
    var card,
        currentCardEl,
        currentOverlayEl,
        currentCardImgEl;

    function GalleryView(collection, el) {
        this.collection = collection;
        this.el = el;

        this.createCards = function() {
            _.each(this.collection, function(card) {
                var card = new Card(card.title, card.medium, card.year, card.file, currentCard);
                card.createCard(currentCard, el);
                currentCard++;
            });
        };

        this.newCard = function() {
            $( this.card ).fadeIn();
            $( this.overlay ).fadeOut();
        };
    }

    function CardView(card) {
        this.card = card;

        this.showCard = function(choice) {
            currentCard = choice;
            // if currentcard == 0, disable previous button
            // if (currentCard == 0) {
            //     $("#previous-card").prop("disabled", true);
            // }
            // else if currentcard == group length, disable next button

            if ($(".gallery-view").css("display") == "none") {
                $(".gallery-view").css("display", "block");
            }
            $("#card-" + currentCard).toggleClass("card-view").css("display", "none");
            $("#card-" + currentCard).fadeIn("fast");
        }

        this.showNext = function() {
            $("#card-" + currentCard).toggleClass("card-view");
            currentCard++;
            this.showCard(currentCard);
        }

        this.showPrevious = function() {
            $("#card-" + currentCard).toggleClass("card-view");
            currentCard--;
            this.showCard(currentCard);
        }
    };

    function Card(title, medium, year, file, currentCard) {
        this.title = title;
        this.medium = medium;
        this.year = year;
        this.file = file;

        this.cardEl = $( "<div>",{ class: "card", id: "card-" + currentCard } );
        this.img = $( "<img>", { class: "card-img", src: data.baseUrl + file } );

        this.createCard = function(currentCard, el) {
            this.img.appendTo(this.cardEl);
            this.cardEl.appendTo( el );
        };
    };

    return {
        GalleryView: GalleryView,
        CardView: CardView
    }
});