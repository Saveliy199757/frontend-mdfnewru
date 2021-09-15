function openChooseCity(event) {
    console.log('add')
    event.preventDefault();
    document.querySelector("body").classList.add('modal-open')
    document.querySelector('.modal-chooce-city').classList.add('show');
    document.querySelector('.modal-chooce-city').style.display = "block";
    document.querySelector('.modal-backdrop').style.display = "block";
    document.querySelector('.modal-backdrop').classList.add('show');
}
function closeChooseCity() {
    document.querySelector("body").classList.remove('modal-open')
    document.querySelector('.modal-chooce-city').classList.remove('show');
    document.querySelector('.modal-chooce-city').style.display = "none";
    document.querySelector('.modal-backdrop').style.display = "none";
    document.querySelector('.modal-backdrop').classList.remove('show');
}

$('.productCard .like').click(function() {
    $(this).toggleClass('select');
});
$('.mobile_menu div').on('click', () => {
    $('body').toggleClass('mobil_menu_open');
    $('.mobile_menu div').toggleClass('active');
    $('.mobile_menu nav').toggleClass('open');
    $('.mobile_menu nav > ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");
}
$(document).on('click', '.multi-accordion li > a', function (event) {
    var $this = $(this), $next = $this.next();

    if ($next.length) {
        $next.slideToggle().parent().siblings().children('ul').filter(':visible').slideToggle();
        event.preventDefault();
    }
});