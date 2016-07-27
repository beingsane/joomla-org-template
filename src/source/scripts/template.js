jQuery(document).ready(function ($) {
    // Navbar shrink effect
    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $('body').addClass('nav-shrinked');
        } else {
            $('body').removeClass('nav-shrinked');
        }
    });

    // Init SVG Holder
    var templateName = 'rheinsurfen';
    if (!location.origin) {
        var baseUrl = location.protocol + "//" + location.host;
    } else {
        var baseUrl = location.origin;
    }
    // Dev code
    if(baseUrl.indexOf('repository') > -1) {
        baseUrl = baseUrl + '/redes';
    }
    $.get(baseUrl + '/templates/' + templateName + "/img/icons.svg", function (data) {
        $('<div class="svg-holder"></div>')
            .hide()
            .append(new XMLSerializer().serializeToString(data.documentElement))
            .prependTo($('body'));
    });

    //===============
    // Scrollmagic
    //===============

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: ".numbers",
        offset: -150,
        reverse: true,
    })
    //.addIndicators()
        .on("start", function (e) {
            if (e.scrollDirection === "FORWARD") {
                $('.count-up').countTo({
                    speed: 1500,
                    refreshInterval: 40
                });
            }
        })
        .addTo(controller);

    // Addblocker
    if (typeof blockAdBlock === 'undefined') {
        adBlockDetected();
    } else {
        blockAdBlock.onDetected(adBlockDetected);
        blockAdBlock.on(true, adBlockDetected);
    }
    function adBlockDetected() {
        $('#adblock-msg').removeClass('hide');
    }
});