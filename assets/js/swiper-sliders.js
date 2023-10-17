// Slider in index.html section Brands
const brandSlider = new Swiper(".brands-slider", {
  direction: "horizontal",
  loop: true,
  cssMode: true,
  speed: 500,

  navigation: {
    nextEl: ".brands-slider-button-next",
    prevEl: ".brands-slider-button-prev",
  },

  keyboard: true,

  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
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

// Slider in index.html section Gallery
const gallerySlider = new Swiper(".gallery-slider", {
  direction: "horizontal",
  loop: true,
  cssMode: true,
  speed: 500,
  centeredSlides: true,

  navigation: {
    nextEl: ".gallery-slider-button-next",
    prevEl: ".gallery-slider-button-prev",
  },

  keyboard: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
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

// Slider in index.html section News
const newsSlider = new Swiper(".news-slider", {
  direction: "horizontal",
  loop: true,
  cssMode: true,
  speed: 500,
  centeredSlides: true,

  navigation: {
    nextEl: ".news-slider-button-next",
    prevEl: ".news-slider-button-prev",
  },

  keyboard: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
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