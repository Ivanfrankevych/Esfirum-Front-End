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
//$('.tab').on('click', function (e) {
//    $('.tab.active').removeClass('active');
//    $('.content.active').hide();
//    $(this).addClass('active');
//    let tabs = $('.tab');
//    let index;
//    for (let i = 0; i < tabs.length; i++) {
//        if ($(tabs[i]).hasClass('active')) {
//            index=i;
//        }
//    }
//    let content=$('.content');
//    $(content[index]).addClass('active');
//    $(content[index]).show();
//});

let tabs = $('.tab');
let content = $('.content');
for (let i = 0; i < tabs.length; i++) {
    $(tabs[i]).on('click', function () {
        $('.tab.active').removeClass('active');
        $(tabs[i]).addClass('active');
        $('.content.active').hide();
        $('.content.active').removeClass('active');
        $(content[i]).show();
        $(content[i]).addClass('active');
    });
}
$('.plus').on('click', function () {
    let inp = $(this).parent().find('input');
    let current_val = inp.val();
    let next_val = parseInt(current_val) + 1;
    inp.val(next_val);
});
$('.minus').on('click', function () {
    let inp = $(this).parent().find('input');
    let current_val = inp.val();
    let next_val = parseInt(current_val) - 1;
    if (next_val > 0) {
        inp.val(next_val);
    }
});
