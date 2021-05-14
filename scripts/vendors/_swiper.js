const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    centeredSlides: true,
    spaceBetween: 40,
    speed: 500,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView:1.9,
      },
      1024: {
          slidesPerView: 2.5,
      }
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // }
});