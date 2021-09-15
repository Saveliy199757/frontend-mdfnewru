$('.topBaner').slick({
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
});
$('.sliderProduct').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 600,
    arrows: true,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                speed: 300,
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '40px'
            }
        }
    ]
});