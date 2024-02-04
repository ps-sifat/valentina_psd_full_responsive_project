$('.main_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
    responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },

        }
    ]
});