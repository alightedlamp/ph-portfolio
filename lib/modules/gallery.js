define(['underscore', 'jquery', 'data'], function() {
    // initialize variables
    var deets = false,
        overview = false,
        currentCard = 0;

    var card,
        currentCardEl,
        currentOverlayEl,
        currentCardImgEl;

    function Gallery() {

        this.setup = function() {
            // read json file and determine size
        };

        this.showAll = function() {
            overview = true;
            $(".card-img").animate( { height: "200px" }, 200, function() {} );
            $(".card").css( {
                "position": "relative",
                "padding-right": ".5em"
            });
            $(".controls").css( { "margin-top": "1.5em" });
            $("#overview").attr("disabled", "disabled");
            $(".card").toggleClass("col-md-3 col-sm-3").fadeIn();
        };

        this.createCards = function() {
            _.each( cards, function(card) {
                var card = new Card(card.artist, card.title, card.medium, card.year, card.img, currentCard);
                card.createCard(currentCard);
                currentCard++;
            });
        };

        this.newCard = function() {
            // animate between cards
            $( this.card ).fadeIn();
            $( this.overlay ).fadeOut();
        };

        this.showFirst = function() {
            currentCard = 0;
            $("#card-" + currentCard).fadeIn();
        }

        this.showNext = function() {
            if ( currentCard == cards.length - 1 ) { this.showError(); }
            else {
                $("#card-" + currentCard).fadeOut();
                currentCard++;
                $("#card-" + currentCard).fadeIn();
            }
        }

        this.showPrevious = function() {
            if ( currentCard == 0 ) { this.showError(); }
            else {
                $("#card-" + currentCard).fadeOut();
                currentCard--;
                $("#card-" + currentCard).fadeIn();
            }
        }

        this.showError = function() {
            $("#card-" + currentCard).effect("shake");
        }
    };

    // card object
    function Card(artist, title, medium, year, img, currentCard) {

        this.artist = artist;
        this.title = title;
        this.medium = medium;
        this.year = year;

        this.cardEl = $( "<div>",{ class: "card", id: "card-" + currentCard } );
        this.overlay = $( "<div>",{ class: "overlay", id: "overlay-" + currentCard } );
        this.deetsEl = $( "<div>", { class: "deets" } );
        this.img = $( "<img>", { class: "card-img", src: baseUrl + img } );

        this.createCard = function(currentCard) {
            this.img.appendTo(this.cardEl);
            this.cardEl.appendTo( ".cards" );
            this.overlay.appendTo( ".cards" );
        };

        this.zoomIn = function() {
            overview = false;
            $(".card").toggleClass("col-md-3 col-sm-3").css( {
                "position": "absolute",
                "padding-right": "0",
                "display": "none"
            });
            $(".card-img").animate( { height: "400px" }, 200, function() {} );

            // display selected card
            $(this.card).fadeIn();

            $(".controls").css( { "margin-top": "475px" });
            $("#overview").removeAttr("disabled");

            // set current card to card selected
            currentCard = $(this.card).attr("id").charAt(5);
            clearDeets( currentCard );
        }

        this.showDeets = function() {
            deets = true;
            var $width = $( this.img ).width();

            // animate overlay
            $( this.overlay ).css( {
                "width": $width,
                "z-index": 999
                });
            $( this.overlay ).animate( { opacity: "toggle", }, 200, function() { } );

            // display details

            this.deetsEl.append( "<p>" + cards[currentCard].artist + "</p>" );
            this.deetsEl.append( "<p>" + cards[currentCard].title + "</p>" );
            this.deetsEl.appendTo( this.overlay );
        };

        this.clearDeets = function() {
            deets = false;
            $( ".deets" ).fadeOut( "slow", function() {});
            $( this.overlay ).animate( { opacity: "toggle", }, 200, function() { } );
        };

        // make card accessible by gallery - can scope it to gallery?
    };

    // initialize gallery, create cards, and show first card
    var gallery = new Gallery();

    gallery.createCards();
    gallery.showFirst();

    // control functions - card toggle doesn't work, not finding functions
    $(".card").click(function() {
        if(overview) {
            // zoom in and show select card details
            gallery.card.zoomIn().showDeets();
        }
        else {
            gallery.card.showDeets();
        }
    });

    $("#next").click(function() {
        gallery.showNext();
    });

    $("#previous").click(function() {
        gallery.showPrevious();
    });

    $("#overview").click(function() {
        gallery.showAll();
    });
});