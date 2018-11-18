$(document).ready(function() {

    $(".range-slider__input").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 1000,
        max: 5000,
        from: 0,
        to: 3000,
        hide_min_max: true,
        hide_from_to: false
        // prefix: "$"
    });

});
