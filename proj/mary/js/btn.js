$(document).ready(function (){
    $('#menu-btn-open').on('click', function(e){
        $('.label__modal_menu').toggleClass('label__modal_menu-open');
    });
    
    $('#menu-btn-close').on('click', function(e){
        $('.label__modal_menu').toggleClass('label__modal_menu-open');
    });
    
    $('#btn__scroll-about').on('click', function(e){
        $('.label__modal_menu').removeClass('label__modal_menu-open');
    });
    
    $('#btn__scroll-projects').on('click', function(e){
        $('.label__modal_menu').removeClass('label__modal_menu-open');
    });
    
    // Digital!
    
    $('#sheet-list-off').on('click', function(e){
        $('.sheet__list-off').toggleClass('active__list');
        $('.sheet__list-on').toggleClass('active__list');
    });
    
    $('#sheet-list-on').on('click', function(e){
        $('.sheet__list-off').toggleClass('active__list');
        $('.sheet__list-on').toggleClass('active__list');
    });

    $('#header__button').on('click', function(e) {
        $('#header__body').addClass('header__disapperaing');
        $('#sheet__body').toggleClass('header__disapperaing');
        
    });

});