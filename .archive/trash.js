    // Toggles active section, which isn't really necessary thanks to above events and updated CSS
    // var toggleActiveSection = function(e) {
    //     activeSection = $(this).hasClass("active-section");

    //     if ( $(this).hasClass("main-nav-link") ) {
    //         var tabSelected = e.target.id.replace("-link", "");
    //         tabSelected = document.getElementById(tabSelected);
    //         $(tabSelected).addClass("active-section");
    //     }
    //     else if (activeSection && e.target.nodeName == "BUTTON") {
    //         // skip
    //     }
    //     else if (activeSection) {
    //         $(this).toggleClass("active-section");
    //     }
    //     else {
    //         closeActiveSections();
    //         $(this).toggleClass("active-section");
    //     }
    // }

    // // Clicking a link in the main nav toggles the active sction styles for chosen section
    // for (i = 0; i < links.length; i++) {
    //     links[i].addEventListener("click", toggleActiveSection);
    // }
    // Resets everything if user goes to top of page - to top arrows removed, so this should be removed later
    // var reset = function() {
    //     closeActiveSections();
    // }
    // add click events to arrow tops
    // for (i = 0; i < toTop.length; i++) {
    //     toTop[i].addEventListener("click", reset);
    // }
