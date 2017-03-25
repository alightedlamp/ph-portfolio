define(['underscore', 'jquery'], function() {

    //debugger;
    var sections = document.getElementsByClassName("content-section");
    var innerSections = document.getElementsByClassName("container");
    var links = document.getElementsByClassName("main-nav-link");
    var workSummary = document.getElementById("work-summary");
    var tabContent, tablinks, tabName, isActive, i, activeTab;

    // need a reset function to return everything to it's default state (ex: when to top button clicked);
    var reset = function() {

    }

    // dom functions
    var removeActiveNavLinks = function(e) {
        activeTab = document.getElementsByClassName("active");
        $(activeTab).removeClass("active");
    }

    var closeActiveSections = function(e) {
        if (e.target.children[1].id == "projects"); {
            hideTabs();
            $(workSummary).css("display", "block");
            removeActiveNavLinks();
        }
        for (i = 0; i < innerSections.length; i++) {
            innerSections[i].className = innerSections[i].className.replace(" active-section", "");
        }
    }

    // add event listeners to sections and navs
    for (i = 0; i < sections.length; i++) {
        sections[i].addEventListener("mouseleave", closeActiveSections);
        sections[i].addEventListener("mouseenter", function(e) {
            $(this).children(".container").addClass("active-section");
        });
    }

    // clicking a link in the main nav toggles the active sction styles for chosen section
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener("click", toggleActiveSection);
    }


    var toggleActiveSection = function(e) {
        isActive = $(this).hasClass("active-section");

        if ( $(this).hasClass("main-nav-link") ) {
            var tabSelected = e.target.id.split("-");
            tabSelected = tabSelected[0];
            tabSelected = document.getElementById(tabSelected);
            $(tabSelected).addClass("active-section");
        }
        else if (isActive && e.target.nodeName == "BUTTON") {
            // skip
        }
        else if (isActive) {
            $(this).toggleClass("active-section");
        }
        else {
            closeActiveSections();
            $(this).toggleClass("active-section");
        }
    }

    // handles the sub nav tab content sections navigation
    var hideTabs = function() {
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
    }

    var displayTab = function(tabName, e) {
        // hide all tabs
        hideTabs();

        // remove active tags
        tabLinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        e.currentTarget.className += " active";
    }

    // specific dom action events
    $(".tab-link").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".container").addClass("active-section");
        var tabName = e.target.id.split("-");
        tabName = tabName[0];
        var selectedTab = document.getElementById(tabName);

        // initial tab choice
        if ( $(selectedTab).css("display") == "none" && $(workSummary).css("display") == "block" ) {
            $(workSummary).slideToggle("fast");
            displayTab(tabName, e);
        }
        // close all tabs, show summary
        else if ( $(selectedTab).css("display") == "block" && $(workSummary).css("display") == "none" ) {
            hideTabs();
            $(this).removeClass("active");
            $(workSummary).slideToggle("fast");
        }
        // otherwise, switch tab
        else {
            displayTab(tabName, e);
        }
    });

    // handles mobile menus
    $("#menu-toggle").on("click", function() {
        $("#nav ul.nav").slideToggle("fast");
    });
});