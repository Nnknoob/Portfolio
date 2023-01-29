$(document).ready(function() {
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');



    });

    $(window).scroll(function() {
        $("#menu").removeClass('fa-times');
        $('header').removeClass('toggle');
    });

});