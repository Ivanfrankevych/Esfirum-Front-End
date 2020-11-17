let a = $('i').parents('.text');
let b = $('p');
//for (let i = 0; i < b.length; i++) {
//    if (!($(b[i]).hasClass('text2'))) {
//        $(b[i]).toggleClass('active');
//    }
//}
$('i').on('click', function () {
    $(this).parents('.text').addClass('active');
});
$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('ul').slideToggle();
});
$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    //    arrows: ,
    dots: true,
//    nextArrow: '<span class="next"></span>',
//    prevArrow: '<span class="next">previous</span>'
});
