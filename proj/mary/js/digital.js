$('#sheet-list-off').on('click', function(e){
    $('.sheet__list-off').toggleClass('active__list');
    $('.sheet__list-on').toggleClass('active__list');
});

$('#sheet-list-on').on('click', function(e){
    $('.sheet__list-off').toggleClass('active__list');
    $('.sheet__list-on').toggleClass('active__list');
});