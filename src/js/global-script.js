$( document ).ready(function() {



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