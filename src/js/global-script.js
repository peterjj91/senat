$( document ).ready(function() {



});

$(document).ready(function() {
    $('select').selectpicker();
});

$(document).ready(function() {
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right',
        source: '.main-nav',
        onOpen: function() {
            $('.burger').addClass('active');
        },
        onClose: function() {
            $('.burger').removeClass('active');
        }
    });
});

$(document).mouseup(function (e){
    var container = $("#sidr-right");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $.sidr('close', 'sidr-right');
    }
});

//
$(document).ready(function() {
    $('.slider-card__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        accessibility: false,
        verticalScrolling: true,
        infinite: false,
        swipeToSlide: true,
        asNavFor: '.slider-card__nav',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.slider-card__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-card__for',
        accessibility: false,
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: false,
        infinite: false,
        vertical: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    vertical: false,
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 700,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    $('.slider-card__nav .slick-slide').hover(function (event) {
        $('.slider-card__for').slick('slickGoTo', $(this).data('slickIndex'));
        $('.slider-card__nav .slick-slide').removeClass('slick-current');
        $(this).addClass('slick-current');
    });

    $(".slider-card__for").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
    $(".slider-card__nav").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
});

var ps = new PerfectScrollbar('.scrollbar');

// (function($){
//     $(window).on("load",function(){
//         $(".scrollbar").mCustomScrollbar();
//     });
// })(jQuery);
