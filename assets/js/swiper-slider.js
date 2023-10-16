const swiper = new Swiper(".brands-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".brands-swiper-button-next",
    prevEl: ".brands-swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
