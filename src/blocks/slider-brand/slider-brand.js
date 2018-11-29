$(document).ready(function(){

    $(".slider-brand").slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        nav: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
