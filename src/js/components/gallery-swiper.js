import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.gallery__swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 50,

  pagination: {
    el: ".gallery__right-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  breakpoints: {

    441: {
      slidesPerView: 2,
      spaceBetween: 38
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

});

