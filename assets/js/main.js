
(function ($) {
    "use strict";





    
    
    // data bg img 
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });


    // $('.card-hover').hover(function() {
    //     $(this).css('flex', '2 1 0%');
    //   }, function() {
    //     $(this).css('flex', '1 1 0%');
    //   });
      
})(jQuery);