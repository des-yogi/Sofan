$(document).ready(function(){

  $('.features-slider__row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.features-slider__nav'
  });

  $('.features-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.features-slider__row',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });

});
