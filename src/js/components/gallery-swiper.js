import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.gallery__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".gallery__right-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

});

