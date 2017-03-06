$(document).ready(function(e) {
    var lb = $('#lunbo1').unslider({
            dots: true
        }),
        data = lb.data('unslider');

    $('.unslider-lunbo1').click(function() {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });

});