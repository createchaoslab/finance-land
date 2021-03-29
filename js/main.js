$(function(){

    $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false 
});

$('select').styler();

$('.header__burger').click(function(event){
    $('.header__burger, .menu__ul').toggleClass('active');
    $('body').toggleClass('lock');
})
/*
$('.header__btn-menu').on('click', function(){
    $('menu__ul').slideToggle();
})
*/

})