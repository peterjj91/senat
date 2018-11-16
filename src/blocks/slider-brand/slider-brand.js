$(document).ready(function(){

    $(".slider-brand").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nav: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

});
