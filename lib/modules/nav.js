define(['jquery', 'underscore', 'lib/modules/gallery'], function($, _, gallery) {
    var sections = document.getElementsByClassName("content-section");
    var innerSections = document.getElementsByClassName("container");
    var hasSummary = ["projects", "about"];
    var i, tabContent, tabLinks, tabName, activeSection, activeTab;

    var removeActiveNavLinks = function(e) {
        activeTab = document.getElementsByClassName("active");
        $(activeTab).removeClass("active");
    }

    var closeActiveSections = function(e) {
        // Hide open tabs and replace default text if section is open, but it's kind of jarring
        // is slide toggling on default view because css isn't inline i think
        if (e && hasSummary.indexOf(e.target.children[1].id) > -1); {
            hideTabs();
            removeActiveNavLinks();
            $(".summary").css("display", "block");
        }
        for (i = 0; i < innerSections.length; i++) {
            innerSections[i].className = innerSections[i].className.replace(" active-section", "");
        }
    }

    for (i = 0; i < sections.length; i++) {
        sections[i].addEventListener("mouseleave", closeActiveSections);
        sections[i].addEventListener("mouseenter", function(e) {
            $(this).children(".container").addClass("active-section");
        });
    }

    var menuShrunk = false;
    var title = document.querySelector(".title");
    var menuEls = document.querySelectorAll("#nav ul.nav li");
    var menuLinks = document.querySelectorAll("#nav ul.nav li a");
    var navWrappper = document.querySelector(".nav-wrapper");

    window.addEventListener('scroll', function(e) {
        if (document.body.scrollTop > 200 && !menuShrunk) {
            menuShrunk = true;
            title.style.marginTop = ".3em";
            title.style.color = "#e2e2e2";
            navWrappper.style.height = "65px";
            for (i = 0; i < menuEls.length; i++) {
                menuEls[i].style.height = "65px";
                menuLinks[i].style.height = "65px";
                menuLinks[i].style.padding = "1.2em";
            }
        }
        else if (document.body.scrollTop < 200 && menuShrunk) {
            menuShrunk = false;
            title.style.marginTop = ".75em";
            title.removeAttribute("style");
            navWrappper.style.height = "100px";
            for (i = 0; i < menuEls.length; i++) {
                menuEls[i].style.height = "100px";
                menuLinks[i].style.height = "100px";
                menuLinks[i].style.padding = "2.25em";
            }
        }
    });

    // Toggle any tabs using button#section-link matching section#link
    // Checks for summary class within containing element
    var hideTabs = function() {
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
    }
    var displayTab = function(tabName, e) {
        hideTabs();

        tabLinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        $("#" + tabName).css("display", "block");
        $(e.currentTarget).addClass("active");
    }
    var toggleTabs = function(e) {
        e.preventDefault();
        var targetContainer = $(this).closest(".container").attr("id");
        var currentSummary = $("#" + targetContainer + " > .summary");
        var summaryVisible = $("#" + targetContainer + " > .summary").css("display") == "block";

        var tabName = e.target.id.replace("-link", "");
        var selectedTab = $("#" + tabName);
        var selectedTabVisible = $(selectedTab).css("display") == "block";

        $(this).closest(".container").addClass("active-section");

        if (!selectedTabVisible && summaryVisible) {
            $(currentSummary).slideToggle("fast");
            displayTab(tabName, e);
        }
        else if (selectedTabVisible && !summaryVisible) {
            hideTabs();
            $(this).removeClass("active");
            $(currentSummary).slideToggle("fast");
        }
        else {
            displayTab(tabName, e);
        }
    }
    $(".tab-link").on("click", toggleTabs);

    $("#close-view").on("click", function() {
        $(".gallery-view").css("display", "none");
        $(".card").removeClass("card-view");
    });

    $("#menu-toggle").on("click", function() {
        $("#nav ul.nav").slideToggle("fast");
    });

    $('a[href*=#]').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        event.preventDefault();
    });
});