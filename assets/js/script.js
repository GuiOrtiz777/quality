console.log('liguei !!!');
$(document).ready(function(){
    $('.btn-link').on('click', function(){
        alert('to vivo !');
    });
    console.log('liguei !!!');
    $('.navbar-toggler').on('click', function(){
        $('.collapse.navbar-collapse').toggleClass('show');
        $('.collapse.navbar-collapse').removeClass('collapsin');
        $('.navbar-nav').toggleClass('active');
    });

    $("#slider").on('slide.bs.carousel', function(evt) {
        
        var step = $(evt.relatedTarget).index();

        $('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
                $('#caption-'+step).fadeIn();
        });

    });
});
